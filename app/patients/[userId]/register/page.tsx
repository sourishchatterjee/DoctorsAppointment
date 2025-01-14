


// import Image from "next/image";
// import { redirect } from "next/navigation";

// import RegisterForm from "@/components/forms/RegisterForm";
// import { getPatient, getUser } from "@/lib/actions/patient.actions";

// type SearchParamProps = {
//   params: {
//     userId: string;
//   };
// };

// const Register = async ({ params: { userId } }: SearchParamProps) => {
//   console.log("Fetching data for userId:", userId);

//   try {
//     const user = await getUser(userId);
//     const patient = await getPatient(userId);

//     if (!user) {
//       return <div>User not found</div>;
//     }

//     if (patient) {
//       redirect(`/patients/${userId}/new-appointment`);
//     }

//     return (
//       <div className="flex h-screen max-h-screen">
//         <section className="remove-scrollbar container">
//           <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
//             <Image
//               src="/assets/image1.png"
//               height={1000}
//               width={1000}
//               alt="MedOptima"
//               className="mb-12 h-10 w-fit"
//             />

//             <RegisterForm user={user} />

//             <p className="copyright py-12">© 2024 CarePluse</p>
//           </div>
//         </section>

//         <Image
//           src="/assets/image1.png"
//           height={1000}
//           width={1000}
//           alt="patient"
//           className="side-img max-w-[390px]"
//         />
//       </div>
//     );
//   } catch (error) {
//     console.error("Error fetching user or patient data:", error);
//     return <div>Something went wrong. Please try again later.</div>;
//   }
// };

// export default Register;







// import Image from "next/image";
// import { redirect } from "next/navigation";

// import RegisterForm from "@/components/forms/RegisterForm";
// import { getPatient, getUser } from "@/lib/actions/patient.actions";

// type SearchParamProps = {
//   params: {
//     userId: string;
//   };
// };

// const Register = async ({ params }: SearchParamProps) => {


//   const { userId } = params; // Destructure after `params` is resolved

  
//   console.log("Fetching data for userId:", userId);

//   try {
//     const user = await getUser(userId);
//     const patient = await getPatient(userId);

//     if (!user) {
//       return <div>User not found</div>;
//     }

//     if (patient) {
//       redirect(`/patients/${userId}/new-appointment`);
//     }

//     return (
//       <div className="flex h-screen max-h-screen">
//         <section className="remove-scrollbar container">
//           <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
//             <Image
//               src="/assets/image1.png"
//               height={1000}
//               width={1000}
//               alt="MedOptima"
//               className="mb-12 h-10 w-fit"
//               priority // Add priority to optimize image loading
//             />

//             <RegisterForm user={user} />

//             <p className="copyright py-12">© 2024 CarePluse</p>
//           </div>
//         </section>

//         <Image
//           src="/assets/image1.png"
//           height={1000}
//           width={1000}
//           alt="patient"
//           className="side-img max-w-[390px]"
//         />
//       </div>
//     );
//   } catch (error) {
//     console.error("Error fetching user or patient data:", error);
//     return <div>Something went wrong. Please try again later.</div>;
//   }
// };

// export default Register;




// import Image from "next/image";
// import { redirect } from "next/navigation";

// import RegisterForm from "@/components/forms/RegisterForm";
// import { getPatient, getUser } from "@/lib/actions/patient.actions";

// const Register = async ({ params: { userId } }: SearchParamProps) => {
//   const user = await getUser(userId);
//   const patient = await getPatient(userId);

//   if (patient) redirect(`/patients/${userId}/new-appointment`);

//   return (
//     <div className="flex h-screen max-h-screen">
//       <section className="remove-scrollbar container">
//         <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
//           <Image
//             src="/assets/icons/logo-full.svg"
//             height={1000}
//             width={1000}
//             alt="patient"
//             className="mb-12 h-10 w-fit"
//           />

//           <RegisterForm user={user} />

//           <p className="copyright py-12">© 2024 CarePluse</p>
//         </div>
//       </section>

//       <Image
//         src="/assets/images/register-img.png"
//         height={1000}
//         width={1000}
//         alt="patient"
//         className="side-img max-w-[390px]"
//       />
//     </div>
//   );
// };

// export default Register;







// import Image from "next/image";
// import { redirect } from "next/navigation";

// import RegisterForm from "@/components/forms/RegisterForm";
// import { getPatient, getUser } from "@/lib/actions/patient.actions";

// const Register = async ({ params }: { params: { userId: string } }) => {
//   // Ensure params is ready
//   const userId = params?.userId;

//   if (!userId) {
//     throw new Error("User ID is missing in the route parameters.");
//   }

//   // Fetch user and patient data
//   const user = await getUser(userId);
//   const patient = await getPatient(userId);

//   if (patient) {
//     redirect(`/patients/${userId}/new-appointment`);
//   }

//   return (
//     <div className="flex h-screen max-h-screen">
//       <section className="remove-scrollbar container">
//         <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
//           <Image
//             src="/assets/icons/logo-full.svg"
//             height={1000}
//             width={1000}
//             alt="patient"
//             className="mb-12 h-10 w-fit"
//           />

//           <RegisterForm user={user} />

//           <p className="copyright py-12">© 2024 CarePluse</p>
//         </div>
//       </section>

//       <Image
//         src="/assets/images/register-img.png"
//         height={1000}
//         width={1000}
//         alt="patient"
//         className="side-img max-w-[390px]"
//       />
//     </div>
//   );
// };

// export default Register;



import Image from "next/image";
import { redirect } from "next/navigation";
import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

import * as Sentry from "@sentry/nextjs"

const Register = async ({ params: { userId } }: SearchParamProps) => {

  const user = await getUser(userId);

  Sentry.metrics.set("user_view_register", user.name);

  
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <RegisterForm user={user} />

          <p className="copyright py-12">© 2024 CarePluse</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;