// import jwt  from 'jsonwebtoken';

// const { user } = useAuth();

// const token = 'seu_token_aqui'; // Substitua por seu token real



// try {
//   const decoded = jwt.decode(token, { complete: true });

//   const now = Date.now() / 1000; // Timestamp em segundos

//   if (decoded.payload.exp < now) {
//     console.log('Token expirou');
//   } else if (decoded.payload.nbf > now) {
//     console.log('Token ainda não é válido');
//   } else {
//     console.log('Token é válido');
//   }
// } catch (err) {
//   console.error('Erro ao validar token:', err);
// }