import RPi.GPIO as GPIO
import paho.mqtt.client as mqtt
import time as time

PIN_DIRECCION = 4
PIN_PULSO = 27

# Configurar los pines 
GPIO.setmode(GPIO.BCM)
GPIO.setup(PIN_DIRECCION, GPIO.OUT)
GPIO.setup(PIN_PULSO, GPIO.OUT)

direccion = GPIO.LOW  
pulsos = 0
velocidad = 0

# Función para controlar el motor
def controlar_motor():
    global direccion, pulsos, velocidad
        
    GPIO.output(PIN_DIRECCION, direccion)
    for _ in range(pulsos):
        GPIO.output(PIN_PULSO, GPIO.HIGH)
        time.sleep(velocidad)
        GPIO.output(PIN_PULSO, GPIO.LOW)
        time.sleep(velocidad)

# Direccion
def on_message_direccion(client, userdata, message):
    global direccion
    direccion = GPIO.HIGH if message.payload.decode() == "HIGH" else GPIO.LOW

    print("Mensaje de dirección recibido:", message.payload.decode())

# Pulsos
def on_message_pulso(client, userdata, message):
    global pulsos
    pulsos = int(message.payload.decode())
        
    print("Mensaje de pulsos recibido:", message.payload.decode())

    controlar_motor()


# Velocidad
def on_message_velocidad(client, userdata, message):
    global velocidad
    velocidad = float(message.payload.decode())
    print("Mensaje de velocidad recibido:", message.payload.decode())

client = mqtt.Client()
client.connect("broker.hivemq.com", 1883, 60)

client.message_callback_add("/motor/direccion", on_message_direccion)
client.message_callback_add("/motor/pulso", on_message_pulso)
client.message_callback_add("/motor/velocidad", on_message_velocidad)

# Subscribirnos a los topics
client.subscribe("/motor/direccion")
client.subscribe("/motor/pulso")
client.subscribe("/motor/velocidad")

client.loop_forever()