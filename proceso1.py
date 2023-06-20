import pyodbc
import json
import os

# Establecer la conexión con la base de datos SQL Server
server = os.environ.get('DB_SERVER')
database = os.environ.get('DB_DATABASE')
username = os.environ.get('DB_USERNAME')
password = os.environ.get('DB_PASSWORD')

conn = pyodbc.connect(
    f'DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={server};DATABASE={database};UID={username};PWD={password}'
)

# Obtener el valor seleccionado del radio button
status = input('Estado (1: Vigente, 2: Castigo, 3: Renegociado): ')

# Ejecutar el proceso almacenado
cursor = conn.cursor()
cursor.execute('EXECUTE CM_Retorna_PP @Estado = ?', status)
row = cursor.fetchone()
prioridades = row.Prioridades
pagos = row.Pagos
rene_ref = row.ReneRef

# Cerrar la conexión
conn.close()

# Crear un diccionario con los resultados
resultado = {
    'Prioridades': prioridades,
    'Pagos': pagos,
    'ReneRef': rene_ref
}

# Convertir el diccionario a formato JSON y mostrarlo
resultado_json = json.dumps(resultado)
print(resultado_json)