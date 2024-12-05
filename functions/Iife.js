// Immediately invoked Function Expressions (Iife)


(function chai() {
    console.log(`DB connected`)
}) ();


// isme ; zaroori hai last mai 
(
    (name) => {
        console.log(`DB Connected Two ${name}`);   /// semicolon ()  ;zaroori check krna
    }
) ("munim")