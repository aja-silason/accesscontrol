const dataCar = {
    id: 1,
    brandOfCar: "Volvo",
    date: "10 de Ago. às 09:50",
    distributor: "Pumangol",
    matricula: "LD-41-23-XI",
    portOfCar: "Tanque",
    typeOfCar: "Caminhão"
  };
  
  // Função para criar dados mockados
  function createMockData(count: number) {
    const mockData = [];
    for (let i = 0; i < count; i++) {
      const newCar = { ...dataCar };
      newCar.id = i + 1;
      newCar.matricula = `LD-${Math.floor(Math.random() * 100 + 1)}-${Math.floor(Math.random() * 100 + 1)}-${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`;
      // Adicione aqui mais lógica para gerar outros dados aleatórios se necessário
      mockData.push(newCar);
    }
    return mockData;
  }
  
  // Exemplo de uso, criando 10 carros mockados
  export const mockCars = createMockData(10);


  const login = {
    // id: "f8ebca55-bb7b-47bb-bcd5-83b202d6b962",
    id: 1,
    name: "Joana",
    surname: "Lisboa",
    telephone: "923456789",
    pwd: "$2b$16$XbRI/0EKr/INT3171H2E4OUhlCMInWQHtdwlGKBI3D1V9BKQ8El7e",
    roleId: "29f2d7e0-3415-4179-ae98-82279dd93c88",
    plataformId: null,
    createdAt: "8/17/2024, 1:27:03 PM",
    plataform: null,
    role: {
      id: "29f2d7e0-3415-4179-ae98-82279dd93c88",
      role: "C",
      createdAt: "8/17/2024, 1:24:39 PM",
      description: "Nível de acesso"
    }
  }

  function createMockDataLogin(count: number) {
    const mockLogin = [];
    for (let i = 0; i < count; i++) {
      const newLogin = { ...login };
      login.id = i + 1;
      mockLogin.push(newLogin);
    }
    return mockLogin;
  }

  export const mockLogins = createMockDataLogin(2);

  // authorizationToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY4ZWJjYTU1LWJiN2ItNDdiYi1iY2Q1LTgzYjIwMmQ2Yjk2MiIsIm5hbWUiOiJKb2FuYSIsInN1cm5hbWUiOiJMaXNib2EiLCJ0ZWxlcGhvbmUiOiI5MjM0NTY3ODkiLCJwd2QiOiIkMmIkMTYkWGJSSS8wRUtyL0lOVDMxNzFIMkU0T1VobENNSW5XUUh0ZHdsR0tCSTNEMVY5QktROEVsN2UiLCJyb2xlSWQiOiIyOWYyZDdlMC0zNDE1LTQxNzktYWU5OC04MjI3OWRkOTNjODgiLCJwbGF0YWZvcm1JZCI6bnVsbCwiY3JlYXRlZEF0IjoiOC8xNy8yMDI0LCAxOjI3OjAzIFBNIiwicGxhdGFmb3JtIjpudWxsLCJyb2xlIjp7ImlkIjoiMjlmMmQ3ZTAtMzQxNS00MTc5LWFlOTgtODIyNzlkZDkzYzg4Iiwicm9sZSI6IkMiLCJjcmVhdGVkQXQiOiI4LzE3LzIwMjQsIDE6MjQ6MzkgUE0iLCJkZXNjcmlwdGlvbiI6Ik7DrXZlbCBkZSBhY2Vzc28ifSwiaWF0IjoxNzI0MDY0MjA3LCJleHAiOjE3MjQxNTA2MDd9.ssjQHFxhw_cdouwwWF-h-zHjaOD7MDXQN-an3sfPizY"