export default function ContatoPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        color: "#f5f5f5",
        padding: "80px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#a0a0a0",
            marginBottom: "16px",
          }}
        >
          Contato
        </p>

        <h1
          style={{
            fontSize: "40px",
            fontWeight: 400,
            letterSpacing: "0.04em",
            marginBottom: "20px",
          }}
        >
          Fale com a D’Outro Lado
        </h1>

        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#d6d6d6",
            maxWidth: "720px",
            marginBottom: "40px",
          }}
        >
          Entre em contato para parcerias comerciais, exportação, curadoria de
          produtos e atendimento internacional.
        </p>

        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          <div
            style={{
              border: "1px solid #2a2a2a",
              backgroundColor: "#111111",
              padding: "24px",
            }}
          >
            <h2
              style={{
                fontSize: "18px",
                fontWeight: 400,
                marginBottom: "12px",
              }}
            >
              WhatsApp
            </h2>
            <p style={{ color: "#cfcfcf", lineHeight: 1.7 }}>
              +55 16 99197-7845
            </p>
          </div>

          <div
            style={{
              border: "1px solid #2a2a2a",
              backgroundColor: "#111111",
              padding: "24px",
            }}
          >
            <h2
              style={{
                fontSize: "18px",
                fontWeight: 400,
                marginBottom: "12px",
              }}
            >
              E-mail
            </h2>
            <p style={{ color: "#cfcfcf", lineHeight: 1.7 }}>
              contato@doutrolado.com
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}