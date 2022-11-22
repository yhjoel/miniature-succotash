function calcular()
{
    var n = document.getElementById("n").value;
    s=0;
    e4=Math.pow(Math.PI,3)/32;
    document.write("valor de e4="+e4+"<br>")
    for (i=0;i<=n;i++){
        e1=Math.pow(-1,i);
        e2=(2*i) +1;
        e3=Math.pow(e2,3)
        s=s+(e1/e3);
    }
    document.write("calor de la suma="+s+"<br>")
}

// funcion para entrar al sistema //
function login()
{
var u =  document.getElementById("usuario").value;
var c =  document.getElementById("clave").value;
i=1;
usr="juan";
cl="12345";
       if (u == usr && c==cl )
        {
             document.write("bienvenido al sistema")
             i=4;
        }
        else {
                       document.write('contraseña y usuario incorrecto')
        }
        

} 