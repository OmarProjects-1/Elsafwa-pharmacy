/* ============================================================
   صيدلية الصفوة — ملف البيانات الموحد
   كل تعديل على المنتجات والأقسام يتم هنا فقط.
   ============================================================ */

/* بيانات التواصل */
const CONFIG = { waNumber:'201033207500' };
const waLink = txt => 'https://wa.me/' + CONFIG.waNumber + '?text=' + encodeURIComponent(txt || 'مرحبًا صيدلية الصفوة 👋');

/* الأقسام */
const CATS = [
 {id:'meds',     name:'الأدوية',           line:'الأصناف الأساسية — ولو مش لاقي صنف، كلمنا ونوفره', cls:'t-meds',     pill:'var(--g700)',  main:'#14503f', lite:'#1d6350', deep:'#0b2f27', icon:'<circle cx="12" cy="12" r="8.5"/><path d="M12 8.5v7M8.5 12h7"/>'},
 {id:'skin',     name:'العناية بالبشرة',   line:'مرطبات، واقي شمس، سيرومات — من ماركات ثقة',        cls:'t-skin',     pill:'var(--terra)', main:'#c65f4a', lite:'#d4796a', deep:'#a94434', icon:'<path d="M12 3.5s6 6.2 6 10.2a6 6 0 1 1-12 0C6 9.7 12 3.5 12 3.5z"/>'},
 {id:'hair',     name:'العناية بالشعر',    line:'شامبو، زيوت، ماسكات — لكل نوع شعر',                cls:'t-hair',     pill:'var(--sage)',  main:'#5f7d58', lite:'#7a9570', deep:'#46603f', icon:'<path d="M3 9c3-3 6 3 9 0s6 3 9 0"/><path d="M3 15c3-3 6 3 9 0s6 3 9 0"/>'},
 {id:'body',     name:'العناية بالجسم',    line:'لوشن، كريمات، وجل استحمام — عناية يومية لكل الجسم', cls:'t-body',     pill:'var(--plum)',  main:'#8a5a6b', lite:'#a37488', deep:'#6d4253', icon:'<path d="M12 3.5s6 6.2 6 10.2a6 6 0 1 1-12 0C6 9.7 12 3.5 12 3.5z"/>'},
 {id:'baby',     name:'الأم والطفل',       line:'كل اللي يحتاجه الصغار والماما',                    cls:'t-baby',     pill:'var(--steel)', main:'#5b7d99', lite:'#7a99b5', deep:'#43607a', icon:'<path d="M12 20s-7-4.6-7-9.7A4 4 0 0 1 12 7.6 4 4 0 0 1 19 10.3C19 15.4 12 20 12 20z"/>'},
 {id:'vitamins', name:'فيتامينات ومكملات', line:'دعم يومي للمناعة والطاقة والصحة العامة',           cls:'t-vitamins', pill:'var(--amber)', main:'#b08a2e', lite:'#c7a34a', deep:'#8a6a1c', icon:'<g transform="rotate(-30 12 12)"><rect x="4.5" y="8.5" width="15" height="7" rx="3.5"/><path d="M12 8.5v7"/></g>'}
];
const CATMAP = Object.fromEntries(CATS.map(c => [c.id, c]));

/* المنتجات
  cat   : معرف القسم | name : الاسم | brand : الماركة
  art   : شكل الموك-أب box/blister/syrup/jar/tube/drops/pump/bottle/pack
  img   : صورة حقيقية مثل 'images/panadol.jpg' أو null للموك-أب
  price : السعر | old : السعر قبل الخصم أو null | desc : وصف يظهر في صفحة المنتج
*/
const PRODUCTS = [
{cat:'meds',     name:'بانادول اكسترا 24 قرص',            brand:'Panadol',        art:'box',     img:null, price:99,  old:null, desc:'مسكن وخافض حرارة سريع المفعول للصداع وآلام الجسم والأسنان.'},
{cat:'meds',     name:'بروفين 400 مجم 30 قرص',            brand:'Abbott',         art:'blister', img:null, price:60,  old:null, desc:'مسكن ومضاد التهاب غير ستيرويدي لآلام المفاصل والعضلات.'},
{cat:'meds',     name:'أوميز 20 مجم 14 كبسولة',           brand:'EIPICO',         art:'box',     img:null, price:90,  old:null, desc:'لعلاج حموضة المعدة والقرح — يُؤخذ قبل الأكل بنصف ساعة.'},
{cat:'meds',     name:'فيتامول سيداتي 24 قرص',            brand:'Multipharma',    art:'box',     img:null, price:45,  old:null, desc:'مسكن آمن مناسب للحوامل والمرضعات.'},
{cat:'meds',     name:'فيروجين شراب 120 مل',              brand:'Verno',          art:'syrup',   img:null, price:78,  old:95,   desc:'مكمل حديدي لعلاج أنيميا نقص الحديد — بطعم محسّن للكبار والصغار.'},
{cat:'skin',     name:'ذا أورديناري هيالورونيك أسيد 2% + بي 5', brand:'The Ordinary', art:'drops',   img:'images/products/the%20ordinary%20Hyaluronic%20Acid%202%25%20%2B%20B5%20%28with%20Ceramides%29.webp', price:520, old:null, desc:'سيروم مرطب مكثف بحمض الهيالورونيك متعدد الأوزان الجزيئية والسيراميد لترطيب عميق وطويل الأمد.'},
{cat:'skin',     name:'ذا أورديناري نياسينامايد 10% + زنك 1%',  brand:'The Ordinary', art:'drops',   img:'images/products/the%20ordinary%20niacinamide%20%2B%20zinc.webp', price:480, old:null, desc:'سيروم مركز لتقليل ظهور المسام الواسعة وحب الشباب وتنظيم إفراز الدهون وتوحيد لون البشرة.'},
{cat:'skin',     name:'ذا أورديناري ساليسيليك أسيد 2%',     brand:'The Ordinary', art:'drops',   img:'images/products/the%20ordinary%20Salicylic%20Acid%202%25%20Solution.webp', price:420, old:null, desc:'محلول تقشير لطيف بحمض الساليسيليك 2% لتنظيف المسام بعمق وتقليل الرؤوس السوداء.'},
{cat:'hair',     name:'شامبو إليف كيراتين للشعر التالف',  brand:"L'Oréal Elvive", art:'pump',    img:null, price:520, old:610,  desc:'شامبو بالكيراتين يعيد بناء الشعر التالف من أول استخدام ويمنحه لمعانًا ونعومة.'},
{cat:'hair',     name:'بلسم تريزمي للشعر الجاف',          brand:'TRESemmé',       art:'bottle',  img:null, price:320, old:null, desc:'بلسم مرطب يفك التشابك ويترك الشعر ناعمًا وسهل التصفيف.'},
{cat:'hair',     name:'زيت الأرغان المغذي للشعر',         brand:'Garnier',        art:'drops',   img:null, price:340, old:null, desc:'زيت مغذي يمنح الشعر لمعانًا ويقلل التقصف من أول أسبوع استخدام.'},
{cat:'hair',     name:'ماسك البروتين للشعر الضعيف',       brand:"L'Oréal Elvive", art:'jar',     img:null, price:480, old:null, desc:'ماسك مكثف بالبروتين يعيد بناء الشعر الضعيف والمتقصف.'},
{cat:'hair',     name:'سيروم فيتامين سي للشعر',           brand:'OGX',            art:'drops',   img:null, price:395, old:460,  desc:'سيروم مضاد للأكسدة يحمي الشعر من التقصف ويمنحه لمعانًا صحيًا.'},
{cat:'body',     name:'فازلين جيلي أصلي 250جم',           brand:'Vaseline',       art:'jar',     img:null, price:85,  old:null, desc:'جيلي petroleum أصلي لترطيب عميق وحماية البشرة الجافة والمتشققة.'},
{cat:'body',     name:'لوشن نيفيا للجسم 400 مل',          brand:'Nivea',          art:'bottle',  img:null, price:180, old:210,  desc:'لوشن غني بترطيب 48 ساعة — يمتصه الجسم سريعًا بدون ملمس دهني.'},
{cat:'body',     name:'كريم دوف المرطب للجسم',            brand:'Dove',           art:'jar',     img:null, price:260, old:null, desc:'كريم غني بحليب اللوز — ترطيب عميق للبشرة الجافة جدًا.'},
{cat:'body',     name:'جل استحمام لوكس 500 مل',           brand:'Lux',            art:'bottle',  img:null, price:120, old:145,  desc:'جل استحمام بعبير فاخر ينظف بعمق ويترك بشرتك ناعمة ومعطرة.'},
{cat:'baby',     name:'لوشن جونسونز اللطيف للأطفال',      brand:"Johnson's",      art:'bottle',  img:null, price:215, old:null, desc:'لوشن خفيف بتركيبة لطيفة تمنع فقدان رطوبة بشرة طفلك.'},
{cat:'baby',     name:'شامبو جونسونز للشعر الرقيق',       brand:"Johnson's",      art:'pump',    img:null, price:180, old:null, desc:'شامبو لا يسبب الدموع — لطيف على العينين ومناسب من أول يوم.'},
{cat:'baby',     name:'بيبانثين كريم الحفاضات',           brand:'Bepanthen',      art:'tube',    img:null, price:290, old:null, desc:'مرهم وقائي ومرمّع لبشرة الطفل الحساسة — يحمي من التهاب الحفاضات.'},
{cat:'baby',     name:'حفاضات بامبرز مقاس 4',             brand:'Pampers',        art:'pack',    img:null, price:385, old:430,  desc:'حفاضات بامتصاص فائق وطبقة قطنية لطيفة تبقي طفلك جافًا لساعات.'},
{cat:'baby',     name:'لبن صناعي نان مرحلة 1 800جم',      brand:'Nestlé',         art:'box',     img:null, price:525, old:null, desc:'لبن صناعي متكامل للرضع من الولادة حتى 6 أشهر.'},
{cat:'vitamins', name:'سينتروم نساء 60 قرص',              brand:'Centrum',        art:'box',     img:null, price:655, old:null, desc:'فيتامين متعدد متكامل مصمم لاحتياجات المرأة — طاقة، مناعة، وصحة الشعر والبشرة.'},
{cat:'vitamins', name:'بيورفكتيل للشعر والبشرة والأظافر', brand:'Vitabiotics',    art:'box',     img:null, price:585, old:690,  desc:'مكمل يومي يدعم صحة الشعر والبشرة والأظافر من الداخل.'},
{cat:'vitamins', name:'فيتامين د3 50000 وحدة',            brand:'Verno',          art:'bottle',  img:null, price:96,  old:null, desc:'جرعة أسبوعية عالية المركزة لدعم العظام والمناعة — تحت إشراف الطبيب.'},
{cat:'vitamins', name:'أوميغا 3 لصحة القلب',              brand:'Now Foods',      art:'bottle',  img:null, price:480, old:null, desc:'زيت سمك نقي يدعم صحة القلب والدماغ والمفاصل.'},
{cat:'vitamins', name:'فيتامين سي 1000 فوّار 20 قرص',     brand:'Sanostol',       art:'tube',    img:null, price:110, old:135,  desc:'فيتامين سي فوّار بامتصاص سريع — دعم يومي للمناعة.'}
];

/* معرفات ثابتة للروابط (لا تعدّل هذا السطر) */
PRODUCTS.forEach((p,i) => { p.id = p.cat + '-' + i; });

/* أداة البحث العربية: تتجاهل الهمزات والتشكيل وتوحّد الحروف */
const normAr = s => (s||'').toLowerCase()
  .replace(/[\u064B-\u0652\u0640\u0670]/g,'')
  .replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/ؤ/g,'و').replace(/ئ/g,'ي');

/* رسّام الموك-أب */
const GOLD='#c9a445', LABEL='#fffdf6';
function productArt(p){
  const c = CATMAP[p.cat], g = 'grad-'+p.cat;
  const sh = '<ellipse cx="70" cy="157" rx="34" ry="5.5" fill="rgba(24,39,32,.12)"/>';
  const lbl = (x,y,w,h) =>
    '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="5" fill="'+LABEL+'" opacity=".96"/>'+
    '<rect x="'+(x+6)+'" y="'+(y+7)+'" width="'+(w-12)+'" height="4" rx="2" fill="'+c.deep+'" opacity=".4"/>'+
    '<rect x="'+(x+9)+'" y="'+(y+15)+'" width="'+(w-20)+'" height="3" rx="1.5" fill="'+c.deep+'" opacity=".22"/>'+
    '<circle cx="'+(x+w/2)+'" cy="'+(y+h-7)+'" r="2.2" fill="'+GOLD+'"/>';
  const pill = (x,y) =>
    '<circle cx="'+x+'" cy="'+y+'" r="9" fill="'+LABEL+'"/>'+
    '<circle cx="'+x+'" cy="'+y+'" r="3.6" fill="'+c.lite+'"/>';
  let s = '';
  switch(p.art){
    case 'box':
      s = '<path d="M42 66 L56 58 L100 58 L86 66 Z" fill="'+c.deep+'"/>'+
          '<rect x="42" y="66" width="44" height="86" rx="3" fill="url(#'+g+')"/>'+
          '<path d="M86 66 L100 58 L100 144 L86 152 Z" fill="'+c.deep+'" opacity=".85"/>'+
          '<path d="M64 92 v20 M54 102 h20" stroke="'+LABEL+'" stroke-width="6" stroke-linecap="round"/>'+
          '<rect x="52" y="126" width="24" height="3.5" rx="1.75" fill="'+LABEL+'" opacity=".55"/>'+
          '<rect x="56" y="134" width="16" height="3" rx="1.5" fill="'+LABEL+'" opacity=".35"/>';
      break;
    case 'blister':
      s = '<rect x="36" y="62" width="68" height="88" rx="12" fill="url(#'+g+')"/>'+
          '<rect x="36" y="62" width="68" height="20" rx="12" fill="'+c.deep+'"/>'+
          '<rect x="56" y="69" width="28" height="4.5" rx="2.25" fill="'+LABEL+'" opacity=".6"/>'+
          pill(53,104)+pill(70,104)+pill(87,104)+
          pill(53,130)+pill(70,130)+pill(87,130);
      break;
    case 'syrup':
      s = '<rect x="59" y="38" width="22" height="13" rx="4" fill="'+c.deep+'"/>'+
          '<rect x="63" y="51" width="14" height="9" fill="'+c.deep+'" opacity=".65"/>'+
          '<rect x="48" y="60" width="44" height="92" rx="11" fill="url(#'+g+')"/>'+
          '<rect x="48" y="76" width="44" height="4" fill="'+GOLD+'" opacity=".75"/>'+
          lbl(54,88,32,42);
      break;
    case 'jar':
      s = '<rect x="34" y="66" width="72" height="24" rx="10" fill="'+c.deep+'"/>'+
          '<circle cx="70" cy="78" r="3" fill="'+GOLD+'"/>'+
          '<rect x="40" y="88" width="60" height="62" rx="14" fill="url(#'+g+')"/>'+
          lbl(48,104,44,30);
      break;
    case 'tube':
      s = '<rect x="55" y="141" width="30" height="14" rx="5" fill="'+c.deep+'"/>'+
          '<path d="M56 139 L84 139 L80 58 L60 58 Z" fill="url(#'+g+')"/>'+
          '<rect x="57" y="50" width="26" height="9" rx="2" fill="'+c.deep+'"/>'+
          '<rect x="61" y="84" width="18" height="3" fill="'+GOLD+'" opacity=".85"/>'+
          lbl(60,94,20,28);
      break;
    case 'drops':
      s = '<rect x="63" y="30" width="14" height="12" rx="5" fill="'+c.deep+'"/>'+
          '<rect x="61" y="42" width="18" height="18" rx="4" fill="'+c.deep+'"/>'+
          '<rect x="50" y="60" width="40" height="90" rx="11" fill="url(#'+g+')"/>'+
          '<rect x="50" y="74" width="40" height="3.5" fill="'+GOLD+'" opacity=".75"/>'+
          lbl(56,86,28,32);
      break;
    case 'pump':
      s = '<rect x="84" y="40" width="14" height="7" rx="3.5" fill="'+c.deep+'"/>'+
          '<path d="M62 40 h24 v7 h-16 v9 h-8 z" fill="'+c.deep+'"/>'+
          '<rect x="58" y="56" width="24" height="9" rx="3" fill="'+c.deep+'"/>'+
          '<rect x="46" y="65" width="48" height="87" rx="12" fill="url(#'+g+')"/>'+
          lbl(54,94,32,36);
      break;
    case 'bottle':
      s = '<rect x="58" y="44" width="24" height="15" rx="4" fill="'+c.deep+'"/>'+
          '<rect x="62" y="59" width="16" height="8" fill="'+c.deep+'" opacity=".7"/>'+
          '<rect x="44" y="67" width="52" height="85" rx="13" fill="url(#'+g+')"/>'+
          '<rect x="44" y="80" width="52" height="4" fill="'+GOLD+'" opacity=".75"/>'+
          lbl(54,94,32,36);
      break;
    case 'pack':
      s = '<path d="M38 72 q32 -16 64 0 l-3 76 q-29 12 -58 0 z" fill="url(#'+g+')"/>'+
          '<path d="M38 72 q32 -16 64 0 l-1.4 15 q-30.5 -14 -61.2 0 z" fill="'+c.deep+'"/>'+
          '<path d="M70 112 c-8 -7 -13 -12 -13 -18 a6.5 6.5 0 0 1 13 -1.5 a6.5 6.5 0 0 1 13 1.5 c0 6 -5 11 -13 18 z" fill="'+LABEL+'" opacity=".92"/>'+
          '<rect x="56" y="124" width="28" height="3.5" rx="1.75" fill="'+LABEL+'" opacity=".55"/>';
      break;
  }
  return '<svg viewBox="0 0 140 170" aria-hidden="true" focusable="false">'+sh+s+'</svg>';
}

/* حقن تدرجات الأقسام تلقائيًا في أي صفحة */
document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('gradRoot')){
    document.body.insertAdjacentHTML('afterbegin',
      '<svg id="gradRoot" width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>' +
      CATS.map(c => '<linearGradient id="grad-'+c.id+'" x1="0" y1="0" x2="0" y2="1">'+
        '<stop offset="0" stop-color="'+c.lite+'"/><stop offset="1" stop-color="'+c.main+'"/></linearGradient>').join('') +
      '</defs></svg>');
  }
});