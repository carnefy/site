"use client";

export default function NewsletterForm() {
  return (
    <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Digite seu melhor e-mail"
        className="px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-[#FF484B] focus:bg-white transition-all"
        required
      />
      <button
        type="submit"
        className="text-white px-6 py-4 rounded-xl font-bold bg-[#FF484B] transition-colors duration-300"
      >
        Quero ser avisado
      </button>
    </form>
  );
}
