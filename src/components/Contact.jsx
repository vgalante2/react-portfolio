

function Contact() {


    return (

<section id="contact" className="d-flex align-items-center flex-column justify-content-center p-5 contact">
<h1 className="text-dark">Lets Collab!</h1>
    <form method="POST" action="https://api.web3forms.com/submit" className="d-flex align-items-center flex-column justify-content-center p-5 contact w-100 rounded border-thick">
    <input type="hidden" name="access_key" value="5f51bf64-b8e2-4c0f-bf13-6ac0c11c269c"></input>
    <div className="form-group w-50 p-2">
         <label htmlFor="name" >Name</label>
         <input type="name" name="name" className="form-control w-100" id="name"  placeholder="Enter Name" required/>
      </div>
      <div className="form-group w-50 p-2">
         <label htmlFor="email" >Email address</label>
         <input type="email" name="email" className="form-control w-100" id="email"  placeholder="Enter email" required />
      </div>
      <div className="form-group w-50 p-2">
        <label htmlFor="message" >Message</label>
        <input type="message" name="message" className="form-control" id="message" placeholder="message"/>
       </div>
       <button type="submit" className=" mt-2 btn btn-info">Submit</button>
    </form>

    <script src="https://web3forms.com/client/script.js" async defer></script>
</section>
    ) 

}

export default Contact
