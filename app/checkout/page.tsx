"use client";

import { useEffect, useMemo, useState } from "react";
import {
  detectCountryLabel,
  detectCurrency,
  type CurrencyCode,
} from "../../src/utils/intl";

export default function CheckoutPage() {
  const [countryCode, setCountryCode] = useState("BR");
  const [currency, setCurrency] = useState<CurrencyCode>("BRL");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    phone: "",
    notes: "",
  });

  useEffect(() => {
    const locale = navigator.language || "pt-BR";
    const inferredCountry = locale.split("-")[1]?.toUpperCase() || "BR";
    const inferredCurrency = detectCurrency(inferredCountry);

    setCountryCode(inferredCountry);
    setCurrency(inferredCurrency);
    setForm((prev) => ({
      ...prev,
      country: detectCountryLabel(inferredCountry),
    }));
  }, []);

  const summary = useMemo(() => {
    return {
      shippingTo: detectCountryLabel(countryCode),
      currency,
    };
  }, [countryCode, currency]);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Order request captured successfully.");
  }

  return (
    <main className="page-shell">
      <section className="checkout-shell">
        <div className="checkout-main">
          <span className="section-kicker">Checkout</span>
          <h1 className="page-title">Initiate your order</h1>
          <p className="page-intro">
            Complete the form below to begin your order request with international
            shipping context and premium product handling.
          </p>

          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="checkout-grid">
              <label>
                Full name
                <input name="name" value={form.name} onChange={handleChange} required />
              </label>

              <label>
                Company
                <input name="company" value={form.company} onChange={handleChange} />
              </label>

              <label>
                Email
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Country
                <input
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Phone
                <input name="phone" value={form.phone} onChange={handleChange} />
              </label>
            </div>

            <label className="checkout-notes">
              Notes
              <textarea
                name="notes"
                rows={5}
                value={form.notes}
                onChange={handleChange}
                placeholder="Product quantity, destination details, wholesale request or delivery notes."
              />
            </label>

            <button type="submit" className="primary-action">
              Submit order request
            </button>
          </form>
        </div>

        <aside className="checkout-sidebar">
          <div className="checkout-summary-card">
            <span className="section-kicker">International summary</span>
            <ul className="checkout-summary-list">
              <li>
                <span>Shipping to</span>
                <strong>{summary.shippingTo}</strong>
              </li>
              <li>
                <span>Currency</span>
                <strong>{summary.currency}</strong>
              </li>
            </ul>
          </div>

          <div className="checkout-trust-card">
            <span className="section-kicker">Confidence</span>
            <ul className="checkout-trust-list">
              <li>Secure international payment</li>
              <li>We ship worldwide</li>
              <li>Taxes calculated at checkout</li>
              <li>Premium handling for selected products</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}