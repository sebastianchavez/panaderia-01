const CATEGORIAS = [
  { id: 'panes', nombre: 'Panes Artesanales', icono: '🍞', descripcion: 'Hogazas, baguettes y panes de masa madre' },
  { id: 'bolleria', nombre: 'Bollería', icono: '🥐', descripcion: 'Croissants, medialunas y hojaldres' },
  { id: 'facturas', nombre: 'Facturas', icono: '🧈', descripcion: 'Dulces tradicionales recién horneados' },
  { id: 'tortas', nombre: 'Tortas', icono: '🎂', descripcion: 'Para compartir en familia' },
  { id: 'galletas', nombre: 'Galletas', icono: '🍪', descripcion: 'Crujientes y artesanales' },
  { id: 'bebidas', nombre: 'Bebidas', icono: '☕', descripcion: 'Café, chocolate y mates' }
];

const PRODUCTOS = [
  {
    id: 'p001',
    nombre: 'Pan de Masa Madre',
    categoria: 'panes',
    precio: 6500,
    imagen: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
    descripcion: 'Hogaza artesanal de masa madre fermentada durante 24 horas. Corteza crujiente y miga esponjosa con sabor ligeramente ácido, perfecta para tostadas y sándwiches.',
    ingredientes: 'Harina orgánica, masa madre, agua, sal marina',
    destacado: true,
    stock: 25
  },
  {
    id: 'p002',
    nombre: 'Baguette Francesa Clásica',
    categoria: 'panes',
    precio: 3200,
    imagen: 'https://images.unsplash.com/photo-1568471173242-461f0a730452?w=600&q=80',
    descripcion: 'Baguette tradicional francesa con corteza dorada y crujiente. Miga tierna y alveolada. Ideal para acompañar cualquier comida o disfrutar con manteca.',
    ingredientes: 'Harina de trigo, agua, levadura, sal',
    destacado: true,
    stock: 40
  },
  {
    id: 'p003',
    nombre: 'Pan de Centeno Integral',
    categoria: 'panes',
    precio: 7800,
    imagen: 'https://images.unsplash.com/photo-1586444248902-2f3edb853957?w=600&q=80',
    descripcion: 'Pan denso y nutritivo elaborado con harina de centeno integral y semillas de girasol. Sabor intenso y textura húmeda, ideal para una alimentación saludable.',
    ingredientes: 'Harina de centeno, semillas de girasol, sal marina, levadura madre',
    destacado: false,
    stock: 18
  },
  {
    id: 'p004',
    nombre: 'Croissant de Mantequilla',
    categoria: 'bolleria',
    precio: 3800,
    imagen: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80',
    descripcion: 'Croissant hojaldrado hecho con mantequilla francesa, dorado y crujiente por fuera, tierno y esponjoso por dentro. El clásico parisino perfecto para el desayuno.',
    ingredientes: 'Harina, mantequilla francesa, huevo, azúcar, levadura',
    destacado: true,
    stock: 35
  },
  {
    id: 'p005',
    nombre: 'Medialunas de Manteca (x6)',
    categoria: 'bolleria',
    precio: 9500,
    imagen: 'https://images.unsplash.com/photo-1623334044303-241021148842?w=600&q=80',
    descripcion: 'Pack de seis medialunas de manteca argentinas, hojaldradas y tiernas. Con su clásica textura esponjosa y sabor delicado. Ideales para el mate o el café de la tarde.',
    ingredientes: 'Harina, manteca, huevo, azúcar, leche, levadura',
    destacado: true,
    stock: 30
  },
  {
    id: 'p006',
    nombre: 'Pain au Chocolat',
    categoria: 'bolleria',
    precio: 4500,
    imagen: 'https://images.unsplash.com/photo-1623334044303-241021148842?w=600&q=80',
    descripcion: 'Hojaldre relleno con dos barras de chocolate negro premium. Horneado al momento para conseguir el contraste perfecto entre chocolate derretido y masa crujiente.',
    ingredientes: 'Hojaldre, chocolate negro 70%, mantequilla, huevo',
    destacado: false,
    stock: 22
  },
  {
    id: 'p007',
    nombre: 'Facturas Surtidas (x12)',
    categoria: 'facturas',
    precio: 12000,
    imagen: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&q=80',
    descripcion: 'Docena de facturas variadas: vigilantes, cañoncitos de dulce de leche, berlinesas de crema y sambayones. Para una mesa dulce de domingo bien completa.',
    ingredientes: 'Harina, manteca, crema pastelera, dulce de leche, azúcar glas',
    destacado: true,
    stock: 20
  },
  {
    id: 'p008',
    nombre: 'Torta de Miel y Nueces',
    categoria: 'tortas',
    precio: 28000,
    imagen: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80',
    descripcion: 'Bizcochuelo húmedo saborizado con miel de romero y nueces pecanas tostadas. Glaseado de miel y un toque de canela. Perfecta para el té o la merienda.',
    ingredientes: 'Harina, miel de romero, nueces pecanas, canela, huevo, mantequilla',
    destacado: true,
    stock: 10
  },
  {
    id: 'p009',
    nombre: 'Torta de Chocolate y Avellanas',
    categoria: 'tortas',
    precio: 32000,
    imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
    descripcion: 'Torta húmeda de tres capas con ganache de chocolate amargo y crema de avellanas. Decorada con avellanas tostadas y virutas de chocolate. Un clásico irresistible.',
    ingredientes: 'Chocolate amargo, avellanas, harina, mantequilla, huevo, cacao',
    destacado: false,
    stock: 8
  },
  {
    id: 'p010',
    nombre: 'Galletas de Avena y Miel (x10)',
    categoria: 'galletas',
    precio: 8500,
    imagen: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80',
    descripcion: 'Pack de diez galletas crujientes de avena endulzadas con miel y un toque de canela. Sin conservantes ni colorantes. Ideales para el desayuno o la merienda.',
    ingredientes: 'Avena, miel, mantequilla, harina integral, canela, huevo',
    destacado: false,
    stock: 28
  },
  {
    id: 'p011',
    nombre: 'Alfajores de Maicena (x6)',
    categoria: 'galletas',
    precio: 10000,
    imagen: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80',
    descripcion: 'Caja de seis alfajores de maicena rellenos con abundante dulce de leche y coco rallado. Delicados, tiernos y cubiertos de azúcar glas. Los favoritos de la familia.',
    ingredientes: 'Maicena, harina, dulce de leche, coco rallado, manteca, huevo',
    destacado: true,
    stock: 24
  },
  {
    id: 'p012',
    nombre: 'Café con Leche',
    categoria: 'bebidas',
    precio: 3500,
    imagen: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=600&q=80',
    descripcion: 'Café espresso de altura con leche entera texturizada al vapor. Servido en taza de cerámica bien caliente. Acompañado con una medialuna o tostado.',
    ingredientes: 'Café arábigo de altura, leche entera',
    destacado: false,
    stock: 60
  }
];

const EQUIPO = [
  {
    id: 'e001',
    nombre: 'Carmen Gutiérrez',
    rol: 'Fundadora y Maestra Panadera',
    foto: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80',
    descripcion: 'Con más de 30 años encendiendo hornos, Carmen es el alma de Hogaza Dorada y transmisora de la receta familiar.'
  },
  {
    id: 'e002',
    nombre: 'Tomás Aguirre',
    rol: 'Maestro Bollerero',
    foto: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80',
    descripcion: 'Especialista en hojaldre y técnicas clásicas de la boulangerie francesa. Responsable de nuestros croissants y medialunas.'
  },
  {
    id: 'e003',
    nombre: 'Lucía Fernández',
    rol: 'Jefa de Pastelería',
    foto: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&q=80',
    descripcion: 'Encargada de las tortas, facturas y galletas. Combina la tradición argentina con técnicas europeas de pastelería.'
  },
  {
    id: 'e004',
    nombre: 'Diego Salazar',
    rol: 'Gerente de Atención al Cliente',
    foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    descripcion: 'El encargado de que cada visita, presencial o virtual, sea una experiencia cálida como nuestro pan recién hecho.'
  }
];

const TESTIMONIOS = [
  { nombre: 'Lucía Fernández', texto: 'El pan de masa madre de Hogaza Dorada es el mejor que probé en mucho tiempo. La corteza crujiente y la miga perfecta, todos los días.', rating: 5 },
  { nombre: 'Roberto Gómez', texto: 'Las medialunas son espectaculares, como las de mi infancia. Mi familia no quiere otras desde que las probaron.', rating: 5 },
  { nombre: 'Carolina Vega', texto: 'Pedimos la torta de miel y nueces para un cumpleaños y fue un éxito total. La presentación y el sabor, impecables.', rating: 4 }
];

const RESENAS_INICIALES = [
  { id: 'r001', productoId: 'p001', usuario: 'Lucía Fernández', rating: 5, comentario: 'Increíble pan de masa madre, el mejor que probé. La corteza crujiente y la miga esponjosa con sabor suave.', fecha: '2024-09-15' },
  { id: 'r002', productoId: 'p001', usuario: 'Roberto Gómez', rating: 5, comentario: 'Lo compré para el domingo y fue un éxito total. Tostado con manteca, una delicia.', fecha: '2024-09-20' },
  { id: 'r003', productoId: 'p001', usuario: 'Carolina Vega', rating: 4, comentario: 'Muy buena hogaza, densa pero esponjosa. Se conserva muy bien dos o tres días.', fecha: '2024-09-25' },
  { id: 'r004', productoId: 'p005', usuario: 'Andrea Morales', rating: 5, comentario: 'Las medialunas son tiernas, hojaldradas y con el dulzor justo. Mi merienda favorita.', fecha: '2024-09-10' },
  { id: 'r005', productoId: 'p004', usuario: 'Pedro Ramírez', rating: 5, comentario: 'El croissant es perfecto, crujiente por fuera y suave por dentro. La mantequilla francesa se nota.', fecha: '2024-09-18' },
  { id: 'r006', productoId: 'p008', usuario: 'Sofía Castro', rating: 5, comentario: 'La torta de miel y nueces es un golazo. Húmeda, aromática, perfecta para la merienda.', fecha: '2024-09-22' }
];

const PEDIDOS_INICIALES = [
  {
    id: 'ORD-20240915-001',
    usuarioEmail: 'maria@ejemplo.com',
    fecha: '2024-09-15',
    estado: 'Entregado',
    productos: [
      { id: 'p001', nombre: 'Pan de Masa Madre', precio: 6500, cantidad: 2, imagen: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&q=80' },
      { id: 'p012', nombre: 'Café con Leche', precio: 3500, cantidad: 2, imagen: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=200&q=80' }
    ],
    subtotal: 20000,
    envio: 5000,
    total: 25000,
    tipoEnvio: 'Estándar (3-5 días)',
    direccion: { nombre: 'María López', telefono: '+56 9 1234 5678', calle: 'Calle del Horno 742', ciudad: 'Santiago', codigoPostal: '7500000' },
    metodoPago: 'Tarjeta de Crédito'
  },
  {
    id: 'ORD-20240920-002',
    usuarioEmail: 'maria@ejemplo.com',
    fecha: '2024-09-20',
    estado: 'En camino',
    productos: [
      { id: 'p005', nombre: 'Medialunas de Manteca (x6)', precio: 9500, cantidad: 1, imagen: 'https://images.unsplash.com/photo-1623334044303-241021148842?w=200&q=80' },
      { id: 'p007', nombre: 'Facturas Surtidas (x12)', precio: 12000, cantidad: 1, imagen: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=200&q=80' }
    ],
    subtotal: 21500,
    envio: 10000,
    total: 31500,
    tipoEnvio: 'Express (24-48 horas)',
    direccion: { nombre: 'María López', telefono: '+56 9 1234 5678', calle: 'Calle del Horno 742', ciudad: 'Santiago', codigoPostal: '7500000' },
    metodoPago: 'PayPal'
  },
  {
    id: 'ORD-20240925-003',
    usuarioEmail: 'maria@ejemplo.com',
    fecha: '2024-09-25',
    estado: 'Procesando',
    productos: [
      { id: 'p008', nombre: 'Torta de Miel y Nueces', precio: 28000, cantidad: 1, imagen: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=200&q=80' }
    ],
    subtotal: 28000,
    envio: 5000,
    total: 33000,
    tipoEnvio: 'Estándar (3-5 días)',
    direccion: { nombre: 'María López', telefono: '+56 9 1234 5678', calle: 'Calle del Horno 742', ciudad: 'Santiago', codigoPostal: '7500000' },
    metodoPago: 'Transferencia Bancaria'
  }
];

const USUARIOS_INICIALES = [
  {
    id: 'u001',
    nombre: 'María López',
    email: 'maria@ejemplo.com',
    password: '123456',
    telefono: '+56 9 1234 5678',
    direccion: 'Calle del Horno 742, Santiago, Chile',
    fechaRegistro: '2024-01-15'
  },
  {
    id: 'u002',
    nombre: 'Juan Pérez',
    email: 'juan@ejemplo.com',
    password: '123456',
    telefono: '+56 9 8765 4321',
    direccion: 'Av. del Trigal 245, Santiago, Chile',
    fechaRegistro: '2024-03-20'
  }
];

function formatearPrecio(precio) {
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(Number(precio));
}

function formatearFecha(fecha) {
  const d = new Date(fecha);
  return d.toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' });
}

function generarIdPedido() {
  const fecha = new Date();
  const year = fecha.getFullYear();
  const month = String(fecha.getMonth() + 1).padStart(2, '0');
  const day = String(fecha.getDate()).padStart(2, '0');
  const random = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
  return `ORD-${year}${month}${day}-${random}`;
}

function obtenerProducto(id) {
  return PRODUCTOS.find(p => p.id === id);
}

function obtenerCategoria(id) {
  return CATEGORIAS.find(c => c.id === id);
}

function obtenerResenasProducto(productoId) {
  const resenasStorage = JSON.parse(localStorage.getItem('resenas') || '[]');
  const todas = [...RESENAS_INICIALES, ...resenasStorage];
  return todas.filter(r => r.productoId === productoId);
}

function promedioRating(productoId) {
  const resenas = obtenerResenasProducto(productoId);
  if (resenas.length === 0) return 0;
  const suma = resenas.reduce((acc, r) => acc + r.rating, 0);
  return (suma / resenas.length).toFixed(1);
}

function renderEstrellas(rating, size = 'sm') {
  const sizes = { sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6', xl: 'w-8 h-8' };
  const cls = sizes[size] || sizes.sm;
  const estrellas = [];
  const ratingNum = parseFloat(rating);
  for (let i = 1; i <= 5; i++) {
    const filled = i <= Math.floor(ratingNum);
    const half = !filled && i - 0.5 <= ratingNum;
    const color = filled || half ? 'text-yellow-400' : 'text-gray-300';
    const path = 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.539 1.118L10 13.347l-3.37 2.448c-.783.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.643 8.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.954z';
    estrellas.push(`<svg class="${cls} ${color} inline" fill="currentColor" viewBox="0 0 20 20"><path d="${path}"/></svg>`);
  }
  return estrellas.join('');
}
