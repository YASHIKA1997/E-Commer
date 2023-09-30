import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.color.white};
              border: 1px solid ${({ theme }) => theme.color.btn};
              color: ${({ theme }) => theme.color.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
//if someone feel this form .that details will come in astamidattaroy5@gmail.com
  return <Wrapper>
    <h2 className="common-heading">Contact Page</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21689594688!2d88.26494974350307!3d22.535564938158956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1695750307843!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    
    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/mjvqanya" method="POST" className="contact-inputs">
          <input type="text" name="username" placeholder="username"required autoComplete="off" ></input>
          <input type="email" name="Email" placeholder="Email" required autoComplete="off" ></input>
          <textarea name="Message"  placeholder="Enter your message" cols='30' rows='10' required autoComplete="off"></textarea>
          <input type="submit" value='send'></input>
        </form>
      </div>
    </div>
  </Wrapper>;
};

export default Contact;