export function ContactForm() {
  const handleSubmit = (event: { preventDefault: () => void; currentTarget: HTMLFormElement }) => {
    event.preventDefault();
    const target = event.currentTarget.querySelector('.submit') as HTMLButtonElement | null;
    if (target) {
      target.textContent = 'Sent — we\'ll be in touch';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Your name" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="you@company.com" required />
      </div>
      <div className="field">
        <label htmlFor="model">Project Scope</label>
        <select id="model">
          <option>Brand + Messaging</option>
          <option>Website Design</option>
          <option>UX / UI Design</option>
          <option>Website Development</option>
          <option>Full Website Refresh</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="msg">Project Details</label>
        <textarea id="msg" placeholder="Briefly describe what you're looking to deliver..." />
      </div>
      <button className="submit" type="submit">Submit Inquiry</button>
    </form>
  );
}
