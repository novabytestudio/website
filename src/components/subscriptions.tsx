import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, CreditCard, CalendarClock } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  paymentType: string;
  icon: React.ElementType;
  description: string;
  features: string[];
  notIncluded: string[];
}

const plans: Plan[] = [
  {
    name: "Plan Inicial",
    price: "$749",
    paymentType: "Pago único",
    icon: CreditCard,
    description: "Ideal para emprendedores que buscan comenzar con una solución básica y personalizable.",
    features: [
      "Landing page personalizada",
      "Diseño responsive",
      "Formulario de contacto",
      "Integración con WhatsApp",
      "Hosting por 1 año",
      "Dominio por 1 año",
      "3 meses de mantenimiento básico",
    ],
    notIncluded: [
      "Sistema de Gestión Empresarial",
      "App de Comercio Electrónico",
      "Plataforma de Análisis de Datos",
      "Actualizaciones continuas",
    ],
  },
  {
    name: "Plan Business",
    price: "$299",
    paymentType: "Mensual",
    icon: CalendarClock,
    description: "Perfecto para pequeñas y medianas empresas que necesitan una solución completa.",
    features: [
      "Sistema de Gestión Empresarial (módulos básicos)",
      "App de Comercio Electrónico (hasta 1,000 productos)",
      "Dashboard básico de análisis",
      "Hosting y dominio incluidos",
      "Mantenimiento continuo",
      "Soporte técnico prioritario",
      "Actualizaciones de seguridad",
      "Hasta 3 usuarios administradores",
      "Capacitación inicial incluida",
    ],
    notIncluded: [
      "Módulos empresariales avanzados",
      "Sistema de Gestión de Recursos Humanos",
      "Integraciones personalizadas",
    ],
  },
  {
    name: "Plan Enterprise",
    price: "Personalizado",
    paymentType: "Contactar",
    icon: CalendarClock,
    description: "Solución completa y personalizada para grandes empresas con necesidades específicas.",
    features: [
      "Sistema de Gestión Empresarial completo",
      "App de Comercio Electrónico sin límites",
      "Plataforma de Análisis de Datos avanzada",
      "Integraciones personalizadas",
      "Sistema de Gestión de Recursos Humanos",
      "Usuarios ilimitados",
      "Soporte 24/7 con gerente de cuenta",
      "Implementación y capacitación in situ",
      "Personalización completa de módulos",
      "Migración de datos incluida",
      "SLA garantizado",
    ],
    notIncluded: [],
  },
];

export const SubscriptionPlans = () => {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section id="subscription-plans" className="w-full py-24 bg-[#e8e8e8] text-[#2F3645]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Planes y Precios
        </motion.h2>
        <motion.p
          className="text-center text-lg mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Elige el plan que mejor se adapte a tus necesidades. Todos nuestros planes incluyen soporte técnico y pueden personalizarse según tus requerimientos.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 flex flex-col min-h-[700px] ${
                hoveredPlan === plan.name ? 'scale-105' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onHoverStart={() => setHoveredPlan(plan.name)}
              onHoverEnd={() => setHoveredPlan(null)}
            >
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <plan.icon className="w-6 h-6 text-[#2F3645]" />
                </div>
                <div className="mb-4">
                  <p className="text-3xl font-bold">{plan.price}</p>
                  <p className="text-sm text-gray-600">{plan.paymentType}</p>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="space-y-4">
                  <p className="font-semibold">Incluye:</p>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.notIncluded.length > 0 && (
                    <>
                      <p className="font-semibold">No incluye:</p>
                      <ul className="space-y-2">
                        {plan.notIncluded.map((feature, i) => (
                          <li key={i} className="flex items-start text-gray-500">
                            <X className="text-red-500 mr-2 flex-shrink-0 mt-1" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
              <div className="p-6 bg-[#2F3645] mt-auto">
                <motion.button
                  className="w-full bg-[#e8e8e8] text-[#2F3645] font-bold py-3 px-4 rounded-lg transition duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 8px rgba(232,232,232,0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {plan.paymentType === "Contactar" ? "Contactar" : "Seleccionar Plan"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};