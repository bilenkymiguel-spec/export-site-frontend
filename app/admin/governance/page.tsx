"use client";

import { useMemo, useState } from "react";
import type { GovernanceDecision } from "../../../src/types/governance";
import type { AdminUser } from "../../../src/types/admin";
import { canAccessGovernance } from "../../../src/utils/permissions";

const currentUser: AdminUser = {
  id: 1,
  name: "Miguel Machado Bilenky",
  email: "miguel@doutrolado.com",
  role: "master",
  status: "active",
  createdAt: new Date().toISOString(),
  canVote: true,
  leave: { isAway: false },
  isOriginalMaster: true,
};

const eligibleDirectors = [
  { id: 1, name: "Miguel Machado Bilenky" },
  { id: 2, name: "Jessica Teixeira" },
  { id: 4, name: "Diretor Operacional" },
];

const initialDecisions: GovernanceDecision[] = [
  {
    id: 1001,
    type: "publish_page",
    title: "Publicação da nova home premium",
    description: "Liberar versão staging da homepage internacional.",
    createdByUserId: 2,
    createdByName: "Jessica Teixeira",
    createdAt: new Date().toISOString(),
    status: "pending",
    eligibleVoters: eligibleDirectors.length,
    quorumRequired: Math.floor(eligibleDirectors.length / 2) + 1,
    votes: [],
    relatedEntityId: "home",
  },
];

export default function GovernancePage() {
  const [decisions, setDecisions] = useState(initialDecisions);

  const hasAccess = canAccessGovernance(currentUser);

  const pendingCount = useMemo(
    () => decisions.filter((d) => d.status === "pending").length,
    [decisions]
  );

  function handleVote(decisionId: number, value: "approve" | "reject") {
    setDecisions((prev) =>
      prev.map((decision) => {
        if (decision.id !== decisionId) return decision;

        const filteredVotes = decision.votes.filter(
          (vote) => vote.userId !== currentUser.id
        );

        const updatedVotes = [
          ...filteredVotes,
          {
            userId: currentUser.id,
            userName: currentUser.name,
            value,
            createdAt: new Date().toISOString(),
          },
        ];

        const approveCount = updatedVotes.filter((v) => v.value === "approve").length;
        const rejectCount = updatedVotes.filter((v) => v.value === "reject").length;

        let status: GovernanceDecision["status"] = "pending";
        if (approveCount >= decision.quorumRequired) status = "approved";
        if (rejectCount >= decision.quorumRequired) status = "rejected";

        return {
          ...decision,
          votes: updatedVotes,
          status,
        };
      })
    );
  }

  if (!hasAccess) {
    return (
      <main className="min-h-screen bg-black px-6 py-10 text-[#f4efe6]">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8">
          <h1 className="text-2xl font-semibold">Governança</h1>
          <p className="mt-3 text-white/60">
            Você não possui acesso a esta área.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-[#f4efe6]">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 border-b border-white/10 pb-6">
          <p className="text-sm uppercase tracking-[0.35em] text-white/50">
            Governança
          </p>
          <h1 className="mt-2 text-3xl font-semibold">Decisões críticas</h1>
          <p className="mt-2 text-white/60">
            Aprovação por maioria dinâmica entre master e superadmins ativos.
          </p>
        </header>

        <section className="mb-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/50">Eleitores elegíveis</p>
            <h2 className="mt-2 text-2xl font-semibold">{eligibleDirectors.length}</h2>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/50">Quórum padrão</p>
            <h2 className="mt-2 text-2xl font-semibold">
              {Math.floor(eligibleDirectors.length / 2) + 1}
            </h2>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/50">Pendências</p>
            <h2 className="mt-2 text-2xl font-semibold">{pendingCount}</h2>
          </div>
        </section>

        <section className="space-y-6">
          {decisions.map((decision) => {
            const myVote = decision.votes.find((vote) => vote.userId === currentUser.id);

            return (
              <article
                key={decision.id}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-white/40">
                      {decision.type}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold">{decision.title}</h2>
                    <p className="mt-2 text-white/60">{decision.description}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm">
                    <p>Status: <strong>{decision.status}</strong></p>
                    <p>Quórum: {decision.quorumRequired}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => handleVote(decision.id, "approve")}
                    className="rounded-full bg-[#f4efe6] px-5 py-3 font-medium text-black"
                  >
                    Aprovar
                  </button>
                  <button
                    onClick={() => handleVote(decision.id, "reject")}
                    className="rounded-full border border-white/20 px-5 py-3 font-medium"
                  >
                    Rejeitar
                  </button>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-white/50">
                    Seu voto atual: {myVote ? myVote.value : "não registrado"}
                  </p>

                  <div className="mt-4 space-y-2">
                    {decision.votes.map((vote) => (
                      <div
                        key={`${decision.id}-${vote.userId}`}
                        className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm"
                      >
                        {vote.userName}: {vote.value}
                      </div>
                    ))}

                    {decision.votes.length === 0 && (
                      <p className="text-sm text-white/40">Ainda sem votos.</p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}