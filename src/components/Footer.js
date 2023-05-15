import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer py-5">
      <div className="container">
        <div className="mb-3">
          <Link className="me-3" href="https://en.silversitting.com/suche">
            <img
              src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e316f544f9094143b9eac01f1f19e697.png"
              alt=""
            />
          </Link>

          <Link href="https://en.silversitting.com/suche">
            <img
              src="https://static.wixstatic.com/media/8d6893330740455c96d218258a458aa4.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8d6893330740455c96d218258a458aa4.png"
              alt=""
            />
          </Link>
        </div>
        <div className="row g-4 mb-5">
          <div className="col-12 col-md-6 col-lg-3">
            <Link href="https://en.silversitting.com/suche">General terms&conditions</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">data protection</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Imprint</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">contact</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">team</Link>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Link href="https://en.silversitting.com/suche">Find a child carer</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Become a child carer</Link>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Link href="https://en.silversitting.com/suche">Frequently asked questions by child carers</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Frequently asked questions by parents</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">feedback</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">How it works</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Login / Registration</Link>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Link href="https://en.silversitting.com/suche">to the blog</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">interesting sites for seniors</Link>
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
            <Link href="https://en.silversitting.com/suche">baby-sitter</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Babysitter Berlin</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Babysitter Bonn</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Babysitter Dusseldorf</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Babysitter Frankfurt</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Babysitter Hamburg</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Babysitter Hanover</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Babysitter Karlsruhe</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Babysitter Cologne</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Babysitter Leipzig</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Babysitter Munich</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Babysitter Nuremberg</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Babysitter Stuttgart </Link>
            <br />
            <Link href="https://en.silversitting.com/suche">more cities</Link>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <Link href="https://en.silversitting.com/suche">childcare</Link>
            <Link href="https://en.silversitting.com/suche">childcare Berlin</Link>
            <Link href="https://en.silversitting.com/suche">childcare Bonn</Link>
            <Link href="https://en.silversitting.com/suche">childcare Düsseldorf</Link>
            <Link href="https://en.silversitting.com/suche">childcare Frankfurt</Link>
            <Link href="https://en.silversitting.com/suche"></Link>
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
                <Link href="https://en.silversitting.com/suche">{item}</Link> <br />
              </div>
            ))}
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <Link href="https://en.silversitting.com/suche">lending granny</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">lending granny Berlin</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">lending granny Bonn</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">lending granny Düsseldorf</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">lending granny Frankfurt</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">lending granny Hamburg</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">lending granny Hannover</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">lending granny Karlsruhe</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">lending granny Köln</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">lending granny Leipzig</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">lending granny München</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">lending granny Nürnberg</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">lending granny Stuttgart</Link>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <Link href="https://en.silversitting.com/suche">nanny</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">nanny Berlin</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Nanny Bonn</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Nanny Dusseldorf</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Nanny Frankfurt</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Nanny Hamburg</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Nanny Hanover</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Nanny Karlsruhe</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Nanny Cologne</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Nanny Leipzig</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Nanny Munich</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Nanny Stuttgart</Link>
            <br />
            <Link href="https://en.silversitting.com/suche">Nanny Nuremberg</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
