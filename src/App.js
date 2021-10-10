import React, { useState } from 'react'
import './App.css';
import styled from 'styled-components'
import Dollar from './imagenes/icon-dollar.svg'
import Person from './imagenes/icon-person.svg'
import Logo from './imagenes/logo.svg'
import './custom.css'
const App = (props) => {


  const [monto, montoTotal] = useState(props.monto)
  const [personas, personasTotal] = useState(props.monto)
  const [porcentaje, porcentajeTotal] = useState(0)

  const [total1, totalPorPersona] = useState(0)
  const [total2, totalPropina] = useState(0)

  



  const handleChange = (e) => {
    if(e.target.name === 'monto'){
        montoTotal(e.target.value);
        calcularTotalpersona(monto, personas, porcentaje)
       
    } else if (e.target.name === 'personas'){
      personasTotal(e.target.value)
      calcularTotalpersona(monto, personas, porcentaje)
     
    }
    else if (e.target.name === 'porcentaje'){
      porcentajeTotal(e.target.value)
      calcularTotalpersona(monto, personas, porcentaje)

    }
}


  const calcularTotalpersona = (monto, personas, porcentaje) => {
   
    totalPorPersona(porcentaje * monto / 100 / personas)
    totalPropina(porcentaje * monto / 100)

   
  }

  const calcularPorcentajes = (porciento) => {

    porcentajeTotal(porciento)
    calcularTotalpersona(monto, personas, porciento)
   
  }

  const reiniciarDatos = () => {

      
    calcularTotalpersona(0, 0, 0)

    montoTotal(0)
    personasTotal(0)
    porcentajeTotal(0)
  }
  return (
    <><div>
      <img src={Logo} />
    </div><Body>

        <DivIngresar>

          <LabelGris>Monto</LabelGris>
          <InputCustom2  thousandSeparator={true} prefix={'$'} img={Dollar} type="number" name="monto" id="monto" value={monto} onChange={handleChange} onKeyUp={handleChange} />
          <LabelGris>Seleccionar porcentaje %</LabelGris>
          <DivPorcentajes>
            <Button className={porcentaje === 5 ? "activo" : "normal"} onClick={() => calcularPorcentajes(5)}>5%</Button>
            <Button className={porcentaje === 10 ? "activo" : "normal"} onClick={() => calcularPorcentajes(10)}>10%</Button>
            <Button className={porcentaje === 15 ? "activo" : "normal"} onClick={() => calcularPorcentajes(15)}>15%</Button>
            <Button className={porcentaje === 25 ? "activo" : "normal"} onClick={() => calcularPorcentajes(25)}>25%</Button>
            <Button className={porcentaje === 50 ? "activo" : "normal"} onClick={() => calcularPorcentajes(50)}>50%</Button>
            <InputCustom1 type="number" placeholder={porcentaje === 0 ? "Custom" : porcentaje} name="porcentaje" id="porcentaje" value={porcentaje === 0 ? "custom" : porcentaje} onChange={handleChange} onKeyUp={handleChange} />

          </DivPorcentajes>
          <LabelGris>Numero de personas</LabelGris>
          <InputCustom2 img={Person} type="number" id="personas" name="personas" value={personas} onChange={handleChange} onKeyUp={handleChange} />

        </DivIngresar>

        <DivResultados>
          <DivContenidoResultados>
            <LabelBlanco>Monto Propina</LabelBlanco>
            <SpanGris>/ persona</SpanGris>
            <H3Monto className={total1 >= 99999 ? "90%" : "48px" } >{total1 >= 0.1 ? "$" + total1.toFixed(2) : "0"}</H3Monto>


            <LabelBlanco>Total Propina</LabelBlanco>
            <SpanGris>/ persona</SpanGris>
            <H3Monto2 className={total1 >= 99999 ? "90%" : "48px" } >{total2 >= 0.1 ? "$" + total2.toFixed(2) : "0"}</H3Monto2>
          </DivContenidoResultados>
          {total1 >= 0.01 ?


            <ButtonReset onClick={() => reiniciarDatos()}>Reiniciar</ButtonReset>
            :
            <ButtonReset onClick={() => calcularTotalpersona(monto, personas, porcentaje)}>Calcular</ButtonReset>}

        </DivResultados>


      </Body></>
  );
}

export default App;


const Body = styled.div`

  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:auto;
  font-family:'Space Mono';
  font-size:24px;
  background-color:#fff;
  justify-content:center;
  align-content: center;
  padding: 20px;
  margin: 20px;
  gap: 20px;
  border-radius: 40px;
  max-width: 1240px;

  @media (max-width: 800px) {
    grid-template-columns:1fr;
    grid-template-rows:1fr 1fr;
    }

`

const DivIngresar = styled.div`

  grid-column:1 / 2;
  display:flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

`

const LabelGris = styled.label`

  color:hsl(186, 14%, 43%);
  font-weight:500;
  margin:8% 0 0 1.5% ;

`
const Button = styled.button`

display: inline;
flex-direction: row;
flex-wrap: wrap;
align-content: center;
justify-content: center;
align-items: center;
width: 31%;
margin: 1%;
padding: 2% 6%;
background-color:hsl(183, 100%, 15%);
color:${props => props.color || "#fff"};
border:none;
border-radius:3px;
font-family:'Space Mono';
font-weight:bold;
font-size:24px;
cursor:pointer;

&:hover {

  background-color:hsl(172, 67%, 45%);
  transition:.3s ease-in;
}

&:focus {

  background-color:hsl(172, 67%, 45%);
  color:hsl(183, 100%, 15%);

}

&.activo {
  background-color:hsl(172, 67%, 45%);
  color:hsl(183, 100%, 15%);
}

`
const InputCustom1 = styled.input`

  width:31%;
  margin:1%;
  padding: 2% 0%;
  border:none;
  background-color:hsl(189, 41%, 97%);
  border-radius:3px;
  color:hsl(183, 100%, 15%);
  font-family:'Space Mono';
  font-weight:bold;
  text-align:center;
  font-size:24px;
  
  `

  const InputCustom2 = styled.input`

  width:100%;
  margin:1%;
  padding: 2% 0%;
  border:none;
  background-color:hsl(189, 41%, 97%);
  background-image:url('${props => props.img || Dollar}');
  background-repeat:no-repeat;
  border-radius:3px;
  color:hsl(183, 100%, 15%);
  font-family:'Space Mono';
  font-weight:bold;
  text-align:right;
  font-size:24px;
  background-position: 20px center;
  
  `

const DivPorcentajes = styled.div`

`
const DivResultados = styled.div`

grid-column: 2;
display: flex;
flex-direction: column;
align-content: center;
justify-content: space-around;
align-items: center;
background-color:hsl(183, 100%, 15%);
border-radius: 20px;
max-width: 500px;


@media (max-width: 800px) {

  grid-column:1;
  grid-row:2;

}

`

const LabelBlanco = styled.label`

  color:#fff;
  width:100%;
  grid-column: 1;
  align-self:center;
  justify-self:center;
  font-size:18px;
  align-self:end;
  min-width:100px;
`

const SpanGris = styled.span`
grid-column: 1; 
color:hsl(186, 14%, 43%);
font-size:14px;
font-weight:bold;
align-self:start;

`

const DivContenidoResultados = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
width: 80%;
`
const H3Monto = styled.h3`

  color:hsl(172, 67%, 45%);
  font-size:${props => props.className};
  grid-column:2;
  grid-row:1 / 3;
  align-self:center;
  overflow-wrap: break-word;
  justify-self:center;
  margin: 0;

`

const H3Monto2 = styled.h3`

  color:hsl(172, 67%, 45%);
  font-size:${props => props.className};
  grid-column:2;
  grid-row:3 / 5;
  align-self:center;
  justify-self:center;
  margin: 0;
`

const ButtonReset = styled.button`

  width:80%;
  padding: 2% 6%;
  background-color:hsl(172, 67%, 45%);
  color:hsl(183, 100%, 15%);
  border:none;
  border-radius:3px;
  font-family:'Space Mono';
  font-weight:bold;
  font-size:24px;
  text-transform:uppercase;
  cursor:pointer;

  &:hover {

    background-color:hsl(189, 41%, 97%);
    color:hsl(183, 100%, 15%);
    transition:.3s ease-in;

  }
`


  
  

