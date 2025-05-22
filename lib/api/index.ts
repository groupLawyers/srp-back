// Este archivo sirve como punto de entrada para todas las llamadas a la API
// Cuando tengas un backend real, puedes reemplazar estas funciones simuladas con llamadas reales

import { clientesApi } from "./clientes-api"
import { vendedoresApi } from "./vendedores-api"
import { metricasApi } from "./metricas-api"
import { authApi } from "./auth-api"

export const api = {
  clientes: clientesApi,
  vendedores: vendedoresApi,
  metricas: metricasApi,
  auth: authApi,
}
