
import './contact.css'


import LinkedInIcon from '../../assets/linkedin.png'
import GitHubIcon from '../../assets/github.png'
import "tailwindcss";



const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "62ff4635-f23f-4d51-b3a3-6ad49267d1ff");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  
  };
  return (
    <section id="contactPage">
        <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
       <form  className="contactForm" onSubmit={onSubmit}>
        <input type="text" className="name" placeholder='Your Name'name="your_name" />
        <input type="email" className="email" placeholder='Your Email' name = "your_email" />
        <textarea name='message' className='msg'rows={5} placeholder='Your Message' />
        <button type='submit' value='send'className="submitBtn">Submit</button>
        <div className="links">
          <a href="https://github.com/Luthandoan" target='_blank'> 
            <img src={GitHubIcon} alt="" className="link" /></a>

            
            <a href="https://linkedin.com/in/akhona-ndaba-7503692b0" target='_blank'>
            <img src={LinkedInIcon} alt="" className="link" /></a>
           
            
        </div>
       </form>
        </div>
    </section>
  )
}

export default Contact