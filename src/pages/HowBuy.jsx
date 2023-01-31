import React from "react";

function HowBuy(){
    return (
        <>
            <div className="Tittle">
                <h1>Cómo comprar</h1>
            </div>
            <ol>
                <li>
                    Selecciona el o los productos que deseas comprar pinchando el botón “comprar” y será agregado a tu carro de compra.
                </li>
                <li>
                    Una vez finalizada la selección de los productos pincha el botón “ Enviar solicitud de compra”.
                </li>
                <li>
                    Rellena los datos solicitados y dirección de entrega si eres fuera de Santiago.
                </li>
                <li>
                    Te enviaremos un correo electrónico confirmando la disponibilidad de los productos seleccionados.
                </li>
                <li>
                    Procede a realizar la transferencia electrónica a la cuenta corriente indicada. Si el pago no se realiza en las siguientes 48 horas de recibido el correo de confirmación de disponibilidad de el o los artículos, se perderá la reserva y los artículos serán nuevamente ofrecidos en nuestra página web.
                </li>
                <li>
                    La entrega de la compra en la Región Metropolitana se efectuará en la Estación de Metro Bilbao. Para compras fuera de la Región Metropolitana, los productos se despacharán vía Turbus. El monto del flete lo determinará la empresa transportista y será pagado por el cliente a su recepción.
                </li>
            </ol>
        </>
    )
}
export default HowBuy