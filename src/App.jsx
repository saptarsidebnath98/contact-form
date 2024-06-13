import './App.css';
export default function App(){
  return (
    <div className="container">
      <h1>Contact Us</h1>

      <section className="name-section">
        <div id="firstNameDiv">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName"/>
        </div>
        <div id="lastNameDiv">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName"/>
        </div>
      </section>

      <section id="email-section">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email"/>
      </section>
      
      <section id="query-section">
        <label htmlFor="queryType">Query Type</label>
        <div className="query-options">
          <div className="qu-div">
            <input type="radio" id="generalQuery" value="General Query" name='query'/>
            <label htmlFor="generalQuery">General Enquire</label>
          </div>
          <div className="qu-div">
            <input type="radio" id="supportRequest" value="Support Request" name='query'/>
            <label htmlFor="supportRequest">Support Request</label>
          </div>
        </div>
      </section>
      <section id="message-section">
        <label htmlFor="message">Message</label>
        <textarea id="message" cols="30" rows="10"></textarea>
      </section>
      <section id="consent-section">
        <input type="checkbox" id="consent-check" name='agreed'/>
        <label htmlFor='agreed'>I consent to be being contacted by the team</label>
      </section>
      
      <section id="submit-section">
        <button>Submit</button>
      </section>
    </div>
    
    
  )
}