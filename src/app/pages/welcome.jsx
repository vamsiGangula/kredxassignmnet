import React from "react";
import Image from "next/image";
import Styles from "../styles/Welcome.module.scss";
import Button from '@mui/material/Button';
function Welcome() {
  return (
    <>
      <div>
        <section className={Styles.backimage}>
          <header>
            <div className="flex pt-10 pl-32">
              <Image
                src="/images/png/kred_logo.png"
                width={334}
                height={80}
                alt="Image"
              />
            </div>

            <div className="pt-133 pl-32 flex">
              <div className="w-1/2">
                <div className="w-96">
                <h1 className="text-white font-inter font-semibold text-4xl">Automate Your Finance Function</h1>
                </div>
                <div className="pt-7">
                <p className="text-white font-inter font-semibold text-4xl">WITHOUT Reworking Your ERP</p>
                </div>
                <div className="pt-14">
                    <Button className=" sec1btn ">Learn more</Button>
                </div>
              </div>
              <div className="w-1/2">
                <Image
                  src="/images/png/main_logo.png"
                  width={334}
                  height={80}
                  alt="Image"
                />
              </div>
            </div>
          </header>
        </section>

        {/* body */}
      </div>
    </>
  );
}

export default Welcome;
