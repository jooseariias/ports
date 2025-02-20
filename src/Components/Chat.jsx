// import ChatBot from "react-simple-chatbot";
// import { useState } from "react";
// import { ThemeProvider } from "styled-components";

// export default function Chat({ onCloseChat }) {
  
//   const [isOpen, setIsOpen] = useState(true);

//   const handleCloseChat = () => {
//     setIsOpen(false);
//     onCloseChat(); 
//   }

//   const theme = {
//     background: "#f5f8fb",
//     fontFamily: "Helvetica Neue",
//     headerBgColor: "#004860",
//     headerFontColor: "#fff",
//     headerFontSize: "15px",
//     botBubbleColor: "#00b5d7",
//     botFontColor: "#fff",
//     userBubbleColor: "#fff",
//     userFontColor: "#4a4a4a",
//   };

//   const steps = [
//     {
//       id: '1',
//       message: '¡Hola! Elige la opción que desees:',
//       trigger: '2',
//     },
//     {
//       id: '2',
//       options: [
//         { value: 'contact', label: 'Contáctame', trigger: 'contactOption' },
//         { value: 'social', label: 'Redes', trigger: 'socialOption' },
//       ],
//     },
//     {
//       id: 'contactOption',
//       message: 'Puedes contactarme a través de los siguientes medios:\n\nLinkedIn: [LinkedIn](https://www.linkedin.com/in/joose-ari-b08729233/)\nWhatsApp: +54 3815025442\nCorreo Electrónico: arijoose@gmail.com',
//       trigger: 'thanks',
//     },
//     {
//       id: 'socialOption',
//       message: 'Encuéntrame en mis redes sociales:\n\nLinkedIn: [LinkedIn](https://www.linkedin.com/in/joose-ari-b08729233/)\nGitHub: [GitHub](https://github.com/jooseariias)',
//       trigger: 'thanks',
//     },
//     {
//       id: 'thanks',
//       message: '¡Gracias por visitarme!',
//       end: true,
//     },
//   ];
  

//   return (
//     <div>
//       {isOpen && (
//         <ThemeProvider theme={theme}>
//           <div className="flex justify-end">
//             <button
//               className="px-3 mt-4 right-0 rounded-t-[10px] bg-teal-800 rounded-5 text-white"
//               onClick={handleCloseChat}
//             >
//               x
//             </button>
//           </div>
//           <ChatBot steps={steps} />
//         </ThemeProvider>
//       )}
//     </div>
//   );
// }
