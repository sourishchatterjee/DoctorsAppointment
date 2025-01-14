// //import { Button } from "@/components/ui/button";
// import PatientForm from "@/components/forms/PatientForm";
// import Link from "next/link";
// import Image from "next/image";
// import PasskeyModal from "@/components/PasskeyModal";


//  const Home=({searchParams}: SearchParamProps)=>{

//   const isAdmin = searchParams.admin === "true"



//   return (
//     <div  className="flex h-screen max-h-screen">
//       {/* TODO: OTP Verification  // passkeyModel*/}
//       {isAdmin && <PasskeyModal/>}

//      <section className="remove-scrollbar container my-auto">
//       <div className="sub-container max-w-[496px]">
//       <Image
       
//        src="/assets/image1.png"
//        height={1000}
//        width={1000}
//        alt="patient"
//        className="mb-12 h-10 w-fit"

//       />
//       <PatientForm/>

//       <div className="text-14-regular mt-20 flex justify-between">
//         <p className="justify-items-end text-dark-600 xl:text-left"> © 2025 MedOptima</p>

//         <Link href="/?admin=true" className="text-green-500">
//         Admin
//         </Link>
//       </div>
//       </div>
//      </section>
//      <Image

//      src="/assets/image2.png"
//      height={1000}
//        width={1000}
//        alt="patient"
//        className="side-img max-w-[50%]"
     
//      />
//     </div>
//   );
// }


// export default Home;



import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link";
import Image from "next/image";
import PasskeyModal from "@/components/PasskeyModal";

interface SearchParamProps {
  searchParams: {
    admin?: string;
  };
}

const Home = async ({ searchParams }: SearchParamProps) => {
  const isAdmin = (await searchParams)?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {/* Passkey Modal */}
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/image1.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2025 MedOptima
            </p>

            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/image2.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default Home;
