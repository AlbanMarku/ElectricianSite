export default function Form() {
  return (
    <div className="BookForm">
      <form id="contact-form" name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <div className="Section">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="Section">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="Section">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </div>
        <div className="Section">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
