import React from "react";



    


function Signup(){
    return(
        <>
<section className="signup">
    <h2>Get early access today</h2>
    <p>
        It only takes a minuteto sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you
    </p>
    <section className="input" >
    <form>
    <input type="email" placeholder="email@example.com" className="txtfield"/>
    <button type="submit" class="btn btn-lg" className="butnFree" onclick="this.form.reset();">Get Started For Free</button>
    </form>
</section>
</section>
        </>
    )
}

export default Signup;