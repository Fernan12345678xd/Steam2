/**
 * Extensión STEAM DIY para micro:bit
 * Incluye control de LEDs, motores DC y servos
 */
//% weight=100 color=#FFD700 icon="🔧"
namespace STEAMDIY {
    
    // ------- LED -------
    /**
     * Enciende un LED en el pin especificado
     * @param pin pin donde está conectado el LED
     */
    //% block="STEAM DIY encender LED en pin %pin"
    export function prenderLED(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 1)
    }

    /**
     * Apaga un LED en el pin especificado
     * @param pin pin donde está conectado el LED
     */
    //% block="STEAM DIY apagar LED en pin %pin"
    export function apagarLED(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 0)
    }

    // ------- Motores DC -------
    /**
     * Enciende un motor DC en el pin especificado
     * @param pin pin donde está conectado el motor
     * @param velocidad valor de potencia (0-1023)
     */
    //% block="STEAM DIY encender motor en pin %pin velocidad %velocidad"
    //% velocidad.min=0 velocidad.max=1023
    export function motorDC(pin: AnalogPin, velocidad: number): void {
        pins.analogWritePin(pin, velocidad)
    }

    /**
     * Apaga un motor DC en el pin especificado
     * @param pin pin donde está conectado el motor
     */
    //% block="STEAM DIY apagar motor en pin %pin"
    export function apagarMotor(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 0)
    }

    // ------- Servos -------
    /**
     * Mueve un servo al ángulo indicado
     * @param pin pin donde está conectado el servo
     * @param angulo ángulo del servo entre 0 y 180 grados
     */
    //% block="STEAM DIY mover servo en pin %pin a %angulo grados"
    //% angulo.min=0 angulo.max=180
    export function moverServo(pin: AnalogPin, angulo: number): void {
        pins.servoWritePin(pin, angulo)
    }
}
