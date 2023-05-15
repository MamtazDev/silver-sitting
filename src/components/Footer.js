import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer py-5">
      <div className="container">
        <div className="mb-3">
          <Link className="me-3" href="!#">
            <img
              src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e316f544f9094143b9eac01f1f19e697.png"
              alt=""
            />
          </Link>

          <Link href="!#">
            <img
              src="https://static.wixstatic.com/media/8d6893330740455c96d218258a458aa4.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8d6893330740455c96d218258a458aa4.png"
              alt=""
            />
          </Link>
        </div>
        <div className="row g-4 mb-5">
          <div className="col-12 col-md-6 col-lg-3">
            <Link href="!#">General terms&conditions</Link>
            <br />
            <Link href="!#">data protection</Link>
            <br />
            <Link href="!#">Imprint</Link>
            <br />
            <Link href="!#">contact</Link>
            <br />
            <Link href="!#">team</Link>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Link href="!#">Find a child carer</Link>
            <br />
            <Link href="!#">Become a child carer</Link>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Link href="!#">Frequently asked questions by child carers</Link>
            <br />
            <Link href="!#">Frequently asked questions by parents</Link>
            <br />
            <Link href="!#">feedback</Link>
            <br />
            <Link href="!#">How it works</Link>
            <br />
            <Link href="!#">Login / Registration</Link>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Link href="!#">to the blog</Link>
            <br />
            <Link href="!#">interesting sites for seniors</Link>
            <br />
          </div>
        </div>
        <p className="text-center mb-2">
          © 2020 SilverSitting, Gigauri, Andrea and Monninger, Daniel (GbR)
        </p>
        <p className="mb-5">
          SilverSitting.com is a platform where parents can find loan grannies
          and loan grandpas to care for their children. The SilverSitting -
          Gigauri&Monninger GbR does not provide childcare, nor are childcare
          providers suggested and selected. It is not possible to verify the
          identity of the caretakers, it is pointed out the truthful and correct
          indication of personal data in the data protection regulations and
          terms and conditions.
        </p>

        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-3">
            <Link href="!#">baby-sitter</Link>
            <br />
            <Link href="!#">Babysitter Berlin</Link>
            <br />
            <Link href="!#">Babysitter Bonn</Link>
            <br />
            <Link href="!#">Babysitter Dusseldorf</Link>
            <br />
            <Link href="!#">Babysitter Frankfurt</Link>
            <br />
            <Link href="!#">Babysitter Hamburg</Link>
            <br />
            <Link href="!#">Babysitter Hanover</Link>
            <br />
            <Link href="!#">Babysitter Karlsruhe</Link>
            <br />
            <Link href="!#">Babysitter Cologne</Link>
            <br />
            <Link href="!#">Babysitter Leipzig</Link>
            <br />
            <Link href="!#">Babysitter Munich</Link>
            <br />
            <Link href="!#">Babysitter Nuremberg</Link>
            <br />
            <Link href="!#">Babysitter Stuttgart </Link>
            <br />
            <Link href="!#">more cities</Link>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <Link href="!#">childcare</Link>
            <Link href="!#">childcare Berlin</Link>
            <Link href="!#">childcare Bonn</Link>
            <Link href="!#">childcare Düsseldorf</Link>
            <Link href="!#">childcare Frankfurt</Link>
            <Link href="!#"></Link>
            {[
              "childcare Hamburg",

              "childcare Hannover",

              "childcare Karlsruhe",

              "childcare Köln",

              "childcare Leipzig",

              "childcare München",

              "childcare Nürnberg",

              "childcare Stuttgart",

              "other cities",
            ].map((item, index) => (
              <div key={index}>
                <Link href="!#">{item}</Link> <br />
              </div>
            ))}
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <Link href="!#">lending granny</Link>
            <br />
            <Link href="!#">lending granny Berlin</Link>
            <br />
            <Link href="!#">lending granny Bonn</Link>
            <br />
            <Link href="!#">lending granny Düsseldorf</Link>
            <br />
            <Link href="!#">lending granny Frankfurt</Link>
            <br />
            <Link href="!#">lending granny Hamburg</Link>
            <br />
            <Link href="!#">lending granny Hannover</Link>
            <br />
            <Link href="!#">lending granny Karlsruhe</Link>
            <br />
            <Link href="!#">lending granny Köln</Link>
            <br />
            <Link href="!#">lending granny Leipzig</Link>
            <br />
            <Link href="!#">lending granny München</Link>
            <br />
            <Link href="!#">lending granny Nürnberg</Link>
            <br />
            <Link href="!#">lending granny Stuttgart</Link>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <Link href="!#">nanny</Link>
            <br />
            <Link href="!#">nanny Berlin</Link>
            <br />
            <Link href="!#">Nanny Bonn</Link>
            <br />
            <Link href="!#">Nanny Dusseldorf</Link>
            <br />
            <Link href="!#">Nanny Frankfurt</Link>
            <br />
            <Link href="!#">Nanny Hamburg</Link>
            <br />
            <Link href="!#">Nanny Hanover</Link>
            <br />
            <Link href="!#">Nanny Karlsruhe</Link>
            <br />
            <Link href="!#">Nanny Cologne</Link>
            <br />
            <Link href="!#">Nanny Leipzig</Link>
            <br />
            <Link href="!#">Nanny Munich</Link>
            <br />
            <Link href="!#">Nanny Stuttgart</Link>
            <br />
            <Link href="!#">Nanny Nuremberg</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
