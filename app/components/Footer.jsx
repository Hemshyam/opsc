import React from "react";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <section id="footer">
            <span style={{ fontWeight: 700, fontSize: 28 }}>Contact Us</span>
            <div className="footbox">
                <div className="flex items-center justify-center">
                    <span style={{ fontSize: 32, letterSpacing: 5 }}>OPSC</span>
                </div>
                <span style={{ border: '1px solid' }}></span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                    <Link href={"mailto:opensourceprogrammingclub.vitc@gmail.com"} className="cred"><Mail />opensourceprogrammingclub.vitc@gmail.com</Link>
                    <Link href="https://www.instagram.com/ospc_vitc?igsh=MXR3dzdwanEwYWR0eA==" className="cred"><Instagram />opsc_vitc</Link>
                    <Link href="" className="cred"><Linkedin />OPSC VITC</Link>
                </div>
            </div>

        </section>
    );
}
