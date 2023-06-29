"use client";
import DashboardWrapper from "@/components/dashboard/DashboardWrapper";
import "./styles.css";

function page() {
  const sendEmail = () => {};
  return (
    <DashboardWrapper>
      <div className="contactUs">
        <div className="contactUs__container">
          <h1>Contact Us Today</h1>

          <div className="contactUs__bankName">
            AmericaBank, RSA Lynchwood Park Peterborough PE2 6GG.
          </div>

          <div className="contactUs__email">
            E-mail: contact@americabank.com
          </div>

          <div>
            <form onSubmit={sendEmail}>
              <div className="form__group">
                <input type="text" name="user_name" required />
                <label htmlFor="">Name</label>
              </div>
              <div className="form__group">
                <input type="email" required name="user_email" />
                <label htmlFor="">Email</label>
              </div>
              <div className="form__group">
                <input type="text" required />
                <label htmlFor="">Your Subject</label>
              </div>
              <div className="form__group text__area">
                <textarea
                  placeholder="Your message"
                  required
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form__group btn">
                <button>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
}

export default page;
