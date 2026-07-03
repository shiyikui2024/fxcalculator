// Currency definitions with Flag emoji, Code, Name (Chinese support), and Telephone Country Code
const currencies = [
  { flag: '🇺🇸', code: 'USD', name: '美国 (US Dollar)', dialCode: '+1' },
  { flag: '🇨🇳', code: 'CNY', name: '中国 (Chinese Yuan)', dialCode: '+86' },
  { flag: '🇪🇺', code: 'EUR', name: '欧洲联盟 (Euro)', dialCode: '+33' },
  
  // Eurozone individual countries (helps users search for specific countries using EUR)
  { flag: '🇩🇪', code: 'EUR', name: '德国 (Germany - Euro)', dialCode: '+49' },
  { flag: '🇫🇷', code: 'EUR', name: '法国 (France - Euro)', dialCode: '+33' },
  { flag: '🇮🇹', code: 'EUR', name: '意大利 (Italy - Euro)', dialCode: '+39' },
  { flag: '🇪🇸', code: 'EUR', name: '西班牙 (Spain - Euro)', dialCode: '+34' },
  { flag: '🇳🇱', code: 'EUR', name: '荷兰 (Netherlands - Euro)', dialCode: '+31' },
  { flag: '🇧🇪', code: 'EUR', name: '比利时 (Belgium - Euro)', dialCode: '+32' },
  { flag: '🇦🇹', code: 'EUR', name: '奥地利 (Austria - Euro)', dialCode: '+43' },
  { flag: '🇬🇷', code: 'EUR', name: '希腊 (Greece - Euro)', dialCode: '+30' },
  { flag: '🇵🇹', code: 'EUR', name: '葡萄牙 (Portugal - Euro)', dialCode: '+351' },
  { flag: '🇮🇪', code: 'EUR', name: '爱尔兰 (Ireland - Euro)', dialCode: '+353' },
  { flag: '🇫🇮', code: 'EUR', name: '芬兰 (Finland - Euro)', dialCode: '+358' },

  { flag: '🇯🇵', code: 'JPY', name: '日本 (Japanese Yen)', dialCode: '+81' },
  { flag: '🇬🇧', code: 'GBP', name: '英国 (British Pound)', dialCode: '+44' },
  { flag: '🇭🇰', code: 'HKD', name: '中国香港 (Hong Kong Dollar)', dialCode: '+852' },
  { flag: '🇹🇼', code: 'TWD', name: '中国台湾 (New Taiwan Dollar)', dialCode: '+886' },
  { flag: '🇲🇴', code: 'MOP', name: '中国澳门 (Macau Pataca)', dialCode: '+853' },
  { flag: '🇦🇺', code: 'AUD', name: '澳大利亚 (Australian Dollar)', dialCode: '+61' },
  { flag: '🇨🇦', code: 'CAD', name: '加拿大 (Canadian Dollar)', dialCode: '+1' },
  { flag: '🇨🇭', code: 'CHF', name: '瑞士 (Swiss Franc)', dialCode: '+41' },
  { flag: '🇸🇬', code: 'SGD', name: '新加坡 (Singapore Dollar)', dialCode: '+65' },
  { flag: '🇰🇷', code: 'KRW', name: '韩国 (South Korean Won)', dialCode: '+82' },
  { flag: '🇷🇺', code: 'RUB', name: '俄罗斯 (Russian Ruble)', dialCode: '+7' },
  { flag: '🇹🇭', code: 'THB', name: '泰国 (Thai Baht)', dialCode: '+66' },
  { flag: '🇲🇾', code: 'MYR', name: '马来西亚 (Malaysian Ringgit)', dialCode: '+60' },
  { flag: '🇮🇩', code: 'IDR', name: '印度尼西亚 (Indonesian Rupiah)', dialCode: '+62' },
  { flag: '🇻🇳', code: 'VND', name: '越南 (Vietnamese Dong)', dialCode: '+84' },
  { flag: '🇮🇳', code: 'INR', name: '印度 (Indian Rupee)', dialCode: '+91' },
  { flag: '🇳🇿', code: 'NZD', name: '新西兰 (New Zealand Dollar)', dialCode: '+64' },
  { flag: '🇧🇷', code: 'BRL', name: '巴西 (Brazilian Real)', dialCode: '+55' },
  { flag: '🇿🇦', code: 'ZAR', name: '南非 (South African Rand)', dialCode: '+27' },
  { flag: '🇵🇭', code: 'PHP', name: '菲律宾 (Philippine Peso)', dialCode: '+63' },
  { flag: '🇹🇷', code: 'TRY', name: '土耳其 (Turkish Lira)', dialCode: '+90' },
  { flag: '🇲🇽', code: 'MXN', name: '墨西哥 (Mexican Peso)', dialCode: '+52' },
  { flag: '🇦🇪', code: 'AED', name: '阿联酋 (UAE Dirham)', dialCode: '+971' },
  { flag: '🇸🇦', code: 'SAR', name: '沙特阿拉伯 (Saudi Riyal)', dialCode: '+966' },
  { flag: '🇸🇪', code: 'SEK', name: '瑞典 (Swedish Krona)', dialCode: '+46' },
  { flag: '🇳🇴', code: 'NOK', name: '挪威 (Norwegian Krone)', dialCode: '+47' },
  { flag: '🇩🇰', code: 'DKK', name: '丹麦 (Danish Krone)', dialCode: '+45' },
  { flag: '🇵🇱', code: 'PLN', name: '波兰 (Polish Zloty)', dialCode: '+48' },
  { flag: '🇮🇱', code: 'ILS', name: '以色列 (Israeli Shekel)', dialCode: '+972' },
  { flag: '🇪🇬', code: 'EGP', name: '埃及 (Egyptian Pound)', dialCode: '+20' },
  { flag: '🇦🇷', code: 'ARS', name: '阿根廷 (Argentine Peso)', dialCode: '+54' },
  { flag: '🇨🇱', code: 'CLP', name: '智利 (Chilean Peso)', dialCode: '+56' },
  { flag: '🇨🇴', code: 'COP', name: '哥伦比亚 (Colombian Peso)', dialCode: '+57' },
  { flag: '🇵🇪', code: 'PEN', name: '秘鲁 (Peruvian Sol)', dialCode: '+51' },
  { flag: '🇵🇰', code: 'PKR', name: '巴基斯坦 (Pakistani Rupee)', dialCode: '+92' },
  { flag: '🇧🇩', code: 'BDT', name: '孟加拉国 (Bangladeshi Taka)', dialCode: '+880' },
  { flag: '🇱🇰', code: 'LKR', name: '斯里兰卡 (Sri Lankan Rupee)', dialCode: '+94' },
  { flag: '🇲🇻', code: 'MVR', name: '马尔代夫 (Maldivian Rufiyaa)', dialCode: '+960' },
  { flag: '🇳🇬', code: 'NGN', name: '尼日利亚 (Nigerian Naira)', dialCode: '+234' },
  { flag: '🇰🇪', code: 'KES', name: '肯尼亚 (Kenyan Shilling)', dialCode: '+254' },
  { flag: '🇬🇭', code: 'GHS', name: '加纳 (Ghanaian Cedi)', dialCode: '+233' },
  { flag: '🇲🇦', code: 'MAD', name: '摩洛哥 (Moroccan Dirham)', dialCode: '+212' },
  { flag: '🇩🇿', code: 'DZD', name: '阿尔及利亚 (Algerian Dinar)', dialCode: '+213' },
  { flag: '🇹🇳', code: 'TND', name: '突尼斯 (Tunisian Dinar)', dialCode: '+216' },
  { flag: '🇯🇴', code: 'JOD', name: '约旦 (Jordanian Dinar)', dialCode: '+962' },
  { flag: '🇱🇧', code: 'LBP', name: '黎巴嫩 (Lebanese Pound)', dialCode: '+961' },
  { flag: '🇰🇼', code: 'KWD', name: '科威特 (Kuwaiti Dinar)', dialCode: '+965' },
  { flag: '🇴🇲', code: 'OMR', name: '阿曼 (Omani Rial)', dialCode: '+968' },
  { flag: '🇶🇦', code: 'QAR', name: '卡塔尔 (Qatari Riyal)', dialCode: '+974' },
  { flag: '🇰🇿', code: 'KZT', name: '哈萨克斯坦 (Kazakhstani Tenge)', dialCode: '+7' },
  { flag: '🇺🇦', code: 'UAH', name: '乌克兰 (Ukrainian Hryvnia)', dialCode: '+380' },
  { flag: '🇨🇿', code: 'CZK', name: '捷克 (Czech Koruna)', dialCode: '+420' },
  { flag: '🇭🇺', code: 'HUF', name: '匈牙利 (Hungarian Forint)', dialCode: '+36' },
  { flag: '🇷🇴', code: 'RON', name: '罗马尼亚 (Romanian Leu)', dialCode: '+40' },
  { flag: '🇧🇬', code: 'BGN', name: '保加利亚 (Bulgarian Lev)', dialCode: '+359' },
  { flag: '🇭🇷', code: 'HRK', name: '克罗地亚 (Croatian Kuna)', dialCode: '+385' },
  { flag: '🇮🇸', code: 'ISK', name: '冰岛 (Icelandic Króna)', dialCode: '+354' },
  { flag: '🇷🇸', code: 'RSD', name: '塞尔维亚 (Serbian Dinar)', dialCode: '+381' },
  { flag: '🇧🇾', code: 'BYN', name: '白俄罗斯 (Belarusian Ruble)', dialCode: '+375' },
  { flag: '🇦🇲', code: 'AMD', name: '亚美尼亚 (Armenian Dram)', dialCode: '+374' },
  { flag: '🇬🇪', code: 'GEL', name: '格鲁吉亚 (Lari)', dialCode: '+995' },
  { flag: '🇦🇿', code: 'AZN', name: '阿塞拜疆 (Manat)', dialCode: '+994' },
  { flag: '🇺🇿', code: 'UZS', name: '乌兹别克斯坦 (Som)', dialCode: '+998' },
  { flag: '🇲🇳', code: 'MNT', name: '蒙古 (Tögrög)', dialCode: '+976' },
  { flag: '🇲🇲', code: 'MMK', name: '缅甸 (Kyat)', dialCode: '+95' },
  { flag: '🇰🇭', code: 'KHR', name: '柬埔寨 (Riel)', dialCode: '+855' },
  { flag: '🇱🇦', code: 'LAK', name: '老挝 (Kip)', dialCode: '+856' },
  { flag: '🇳🇵', code: 'NPR', name: '尼泊尔 (Nepalese Rupee)', dialCode: '+977' },
  { flag: '🇦🇫', code: 'AFN', name: '阿富汗 (Afghani)', dialCode: '+93' },
  { flag: '🇮🇶', code: 'IQD', name: '伊拉克 (Iraqi Dinar)', dialCode: '+964' },
  { flag: '🇾🇪', code: 'YER', name: '叶门 (Yemeni Rial)', dialCode: '+967' },
  { flag: '🇧🇭', code: 'BHD', name: '巴林 (Bahraini Dinar)', dialCode: '+973' },
  { flag: '🇱🇾', code: 'LYD', name: '利比亚 (Libyan Dinar)', dialCode: '+218' },
  { flag: '🇸🇩', code: 'SDG', name: '苏丹 (Sudanese Pound)', dialCode: '+249' },
  { flag: '🇪🇹', code: 'ETB', name: '埃塞俄比亚 (Birr)', dialCode: '+251' },
  { flag: '🇺🇬', code: 'UGX', name: '乌干达 (Shilling)', dialCode: '+256' },
  { flag: '🇹🇿', code: 'TZS', name: '坦桑尼亚 (Shilling)', dialCode: '+255' },
  { flag: '🇷🇼', code: 'RWF', name: '卢旺达 (Rwandan Franc)', dialCode: '+250' },
  { flag: '🇦🇴', code: 'AOA', name: '安哥拉 (Kwanza)', dialCode: '+244' },
  { flag: '🇲🇿', code: 'MZN', name: '莫桑比克 (Metical)', dialCode: '+258' },
  { flag: '🇿🇲', code: 'ZMW', name: '赞比亚 (Kwacha)', dialCode: '+260' },
  { flag: '🇧🇼', code: 'BWP', name: '博茨瓦纳 (Pula)', dialCode: '+267' },
  { flag: '🇲🇺', code: 'MUR', name: '毛里求斯 (Rupee)', dialCode: '+230' },
  { flag: '🇺🇾', code: 'UYU', name: '乌拉圭 (Peso)', dialCode: '+598' },
  { flag: '🇵🇾', code: 'PYG', name: '巴拉圭 (Guaraní)', dialCode: '+595' },
  { flag: '🇧🇴', code: 'BOB', name: '玻利维亚 (Boliviano)', dialCode: '+591' },
  { flag: '🇨🇷', code: 'CRC', name: '哥斯达黎加 (Colón)', dialCode: '+506' },
  { flag: '🇵🇦', code: 'PAB', name: '巴拿马 (Balboa)', dialCode: '+507' },
  { flag: '🇬🇹', code: 'GTQ', name: '危地马拉 (Quetzal)', dialCode: '+502' },
  { flag: '🇭🇳', code: 'HNL', name: '洪都拉斯 (Lempira)', dialCode: '+504' },
  { flag: '🇳🇮', code: 'NIO', name: '尼加拉瓜 (Córdoba)', dialCode: '+505' },
  { flag: '🇸🇻', code: 'SVC', name: '萨尔瓦多 (Colón)', dialCode: '+503' },
  { flag: '🇯🇲', code: 'JMD', name: '牙买加 (Dollar)', dialCode: '+1' },
  { flag: '🇩🇴', code: 'DOP', name: '多米尼加 (Peso)', dialCode: '+1' },
  { flag: '🇹🇹', code: 'TTD', name: '特立尼达和多巴哥 (Dollar)', dialCode: '+1' },
  { flag: '🇫🇯', code: 'FJD', name: '斐济 (Dollar)', dialCode: '+679' },
  { flag: '🇵🇬', code: 'PGK', name: '巴布亚新几内亚 (Kina)', dialCode: '+675' },

  // West African Franc (XOF) countries
  { flag: '🇸🇳', code: 'XOF', name: '塞内加尔 (Senegal - CFA Franc)', dialCode: '+221' },
  { flag: '🇨🇮', code: 'XOF', name: '科特迪瓦 (Côte d\'Ivoire - CFA Franc)', dialCode: '+225' },
  { flag: '🇲🇱', code: 'XOF', name: '马里 (Mali - CFA Franc)', dialCode: '+223' },
  { flag: '🇧🇫', code: 'XOF', name: '布基纳法索 (Burkina Faso - CFA Franc)', dialCode: '+226' },
  { flag: '🇳🇪', code: 'XOF', name: '尼日尔 (Niger - CFA Franc)', dialCode: '+227' },
  { flag: '🇹🇬', code: 'XOF', name: '多哥 (Togo - CFA Franc)', dialCode: '+228' },
  { flag: '🇧🇯', code: 'XOF', name: '贝宁 (Benin - CFA Franc)', dialCode: '+229' },
  { flag: '🇬🇼', code: 'XOF', name: '几内亚比绍 (Guinea-Bissau - CFA Franc)', dialCode: '+245' },

  // Central African Franc (XAF) countries
  { flag: '🇨🇲', code: 'XAF', name: '喀麦隆 (Cameroon - CFA Franc)', dialCode: '+237' },
  { flag: '🇨🇬', code: 'XAF', name: '刚果共和国 (Congo - CFA Franc)', dialCode: '+242' },
  { flag: '🇬🇦', code: 'XAF', name: '加蓬 (Gabon - CFA Franc)', dialCode: '+241' },
  { flag: '🇨🇫', code: 'XAF', name: '中非共和国 (Central African Rep. - CFA Franc)', dialCode: '+236' },
  { flag: '🇹🇩', code: 'XAF', name: '乍得 (Chad - CFA Franc)', dialCode: '+235' },
  { flag: '🇬🇶', code: 'XAF', name: '赤道几内亚 (Equatorial Guinea - CFA Franc)', dialCode: '+240' },

  // East Caribbean Dollar (XCD) countries
  { flag: '🇦🇬', code: 'XCD', name: '安提瓜和巴布达 (Antigua and Barbuda - East Caribbean Dollar)', dialCode: '+1' },
  { flag: '🇩🇲', code: 'XCD', name: '多米尼克 (Dominica - East Caribbean Dollar)', dialCode: '+1' },
  { flag: '🇬🇩', code: 'XCD', name: '格林纳达 (Grenada - East Caribbean Dollar)', dialCode: '+1' },
  { flag: '🇰🇳', code: 'XCD', name: '圣基茨和尼维斯 (St. Kitts & Nevis - East Caribbean Dollar)', dialCode: '+1' },
  { flag: '🇱🇨', code: 'XCD', name: '圣卢西亚 (St. Lucia - East Caribbean Dollar)', dialCode: '+1' },
  { flag: '🇻🇳', code: 'XCD', name: '圣文森特和格林纳丁斯 (St. Vincent - East Caribbean Dollar)', dialCode: '+1' },

  // Other currencies
  { flag: '🇨🇺', code: 'CUP', name: '古巴 (Cuban Peso)', dialCode: '+53' },
  { flag: '🇻🇪', code: 'VES', name: '委内瑞拉 (Bolívar soberano)', dialCode: '+58' },
  { flag: '🇲🇬', code: 'MGA', name: '马达加斯加 (Ariary)', dialCode: '+261' },
  { flag: '🇰🇵', code: 'KPW', name: '朝鲜 (North Korean Won)', dialCode: '+850' },
  { flag: '🇸🇾', code: 'SYP', name: '叙利亚 (Syrian Pound)', dialCode: '+963' },
  { flag: '🇧🇼', code: 'BWP', name: '博茨瓦纳 (Botswana Pula)', dialCode: '+267' },
  { flag: '🇲🇺', code: 'MUR', name: '毛里求斯 (Mauritian Rupee)', dialCode: '+230' },
  { flag: '🇺🇾', code: 'UYU', name: '乌拉圭 (Uruguayan Peso)', dialCode: '+598' },
  { flag: '🇵🇾', code: 'PYG', name: '巴拉圭 (Paraguayan Guaraní)', dialCode: '+595' },
  { flag: '🇧🇴', code: 'BOB', name: '玻利维亚 (Bolivian Boliviano)', dialCode: '+591' },
  { flag: '🇨🇷', code: 'CRC', name: '哥斯达黎加 (Costa Rican Colón)', dialCode: '+506' },
  { flag: '🇵🇦', code: 'PAB', name: '巴拿马 (Panamanian Balboa)', dialCode: '+507' },
  { flag: '🇬🇹', code: 'GTQ', name: '危地马拉 (Guatemalan Quetzal)', dialCode: '+502' },
  { flag: '🇭🇳', code: 'HNL', name: '洪都拉斯 (Honduran Lempira)', dialCode: '+504' },
  { flag: '🇳🇮', code: 'NIO', name: '尼加拉瓜 (Nicaraguan Córdoba)', dialCode: '+505' },
  { flag: '🇸🇻', code: 'SVC', name: '萨尔瓦多 (Salvadoran Colón)', dialCode: '+503' },
  { flag: '🇯🇲', code: 'JMD', name: '牙买加 (Jamaican Dollar)', dialCode: '+1' },
  { flag: '🇩🇴', code: 'DOP', name: '多米尼加 (Dominican Peso)', dialCode: '+1' },
  { flag: '🇹🇹', code: 'TTD', name: '特立尼达和多巴哥 (Trinidad and Tobago Dollar)', dialCode: '+1' },
  { flag: '🇫🇯', code: 'FJD', name: '斐济 (Fijian Dollar)', dialCode: '+679' },
  { flag: '🇵🇬', code: 'PGK', name: '巴布亚新几内亚 (Papua New Guinean Kina)', dialCode: '+675' }
];

// App State
let exchangeRates = {};
let fromCurrency = 'USD';
let toCurrency = 'CNY';
let selectedFromCountry = currencies.find(c => c.code === 'USD');
let selectedToCountry = currencies.find(c => c.code === 'CNY');
let currentAmount = 100;
let lastFetchedTime = null;

// DOM Elements
const fromCurrencyBtn = document.getElementById('from-currency-btn');
const toCurrencyBtn = document.getElementById('to-currency-btn');
const fromDropdown = document.getElementById('from-dropdown');
const toDropdown = document.getElementById('to-dropdown');
const fromSearch = document.getElementById('from-search');
const toSearch = document.getElementById('to-search');
const fromList = document.getElementById('from-list');
const toList = document.getElementById('to-list');
const amountInput = document.getElementById('amount-input');
const resultAmount = document.getElementById('result-amount');
const formulaFrom = document.getElementById('formula-from');
const formulaTo = document.getElementById('formula-to');
const lastUpdate = document.getElementById('last-update');
const swapBtn = document.getElementById('swap-btn');
const themeToggle = document.getElementById('theme-toggle');
const quickRatesContainer = document.getElementById('quick-rates');

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Load Exchange Rates (cached or live)
async function fetchRates() {
  try {
    lastUpdate.textContent = '正在获取最新汇率...';
    // Fetch rates relative to USD as base
    const response = await fetch('https://open.er-api.com/v6/latest/USD');
    if (!response.ok) throw new Error('网络请求错误');
    const data = await response.json();
    
    exchangeRates = data.rates;
    lastFetchedTime = new Date(data.time_last_update_utc);
    
    // Save to local storage cache
    localStorage.setItem('cached_rates', JSON.stringify(exchangeRates));
    localStorage.setItem('cached_time', lastFetchedTime.toISOString());
    
    updateRatesUI();
  } catch (error) {
    console.error('Fetch error, using cache...', error);
    const cachedRates = localStorage.getItem('cached_rates');
    const cachedTime = localStorage.getItem('cached_time');
    
    if (cachedRates) {
      exchangeRates = JSON.parse(cachedRates);
      lastFetchedTime = new Date(cachedTime);
      updateRatesUI();
    } else {
      lastUpdate.textContent = '无法加载汇率数据，请检查网络连接。';
    }
  }
}

// Convert Calculation
function performConversion() {
  if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) return;
  
  // Rate formula: Amount * (Rate_to / Rate_from)
  const rateFrom = exchangeRates[fromCurrency];
  const rateTo = exchangeRates[toCurrency];
  const conversionRate = rateTo / rateFrom;
  const result = currentAmount * conversionRate;
  
  // Update result elements
  formulaFrom.textContent = `1 ${fromCurrency}`;
  formulaTo.textContent = `${conversionRate.toFixed(4)} ${toCurrency}`;
  
  // Formatted Result
  resultAmount.textContent = result.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4
  });

  // Render comparison table
  renderComparisonTable();
}

// Render Comparison Table
function renderComparisonTable() {
  const tableBody = document.getElementById('comparison-table-body');
  if (!tableBody || !exchangeRates[fromCurrency]) return;

  const targetCodes = ['CNY', 'USD', 'EUR', 'JPY', 'GBP', 'HKD', 'AUD', 'SGD', 'KRW', 'CAD'];
  tableBody.innerHTML = '';

  targetCodes.forEach(code => {
    if (code === fromCurrency) return;

    const currency = currencies.find(c => c.code === code);
    if (!currency || !exchangeRates[code]) return;

    const rateFrom = exchangeRates[fromCurrency];
    const rateTo = exchangeRates[code];
    const conversionRate = rateTo / rateFrom;
    const converted = currentAmount * conversionRate;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span class="flag">${currency.flag}</span>${currency.name.split(' (')[0]}</td>
      <td><strong>${currency.code}</strong></td>
      <td>1 ${fromCurrency} = ${conversionRate.toFixed(4)} ${currency.code}</td>
      <td style="font-weight:700; color:var(--accent-color);">
        ${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </td>
    `;
    tr.style.cursor = 'pointer';
    tr.addEventListener('click', () => {
      updateToCurrency(code);
    });
    tableBody.appendChild(tr);
  });
}

// History Management
let conversionHistory = JSON.parse(localStorage.getItem('conversion_history')) || [];

function saveToHistory(from, to, amount) {
  if (amount <= 0) return;
  
  // Prevent duplicate consecutive entries
  const lastEntry = conversionHistory[0];
  if (lastEntry && lastEntry.from === from && lastEntry.to === to && lastEntry.amount === amount) {
    return;
  }

  const entry = {
    id: Date.now(),
    from,
    to,
    amount
  };

  conversionHistory.unshift(entry);
  if (conversionHistory.length > 5) {
    conversionHistory.pop();
  }

  localStorage.setItem('conversion_history', JSON.stringify(conversionHistory));
  renderHistory();
}

function renderHistory() {
  const historyList = document.getElementById('history-list');
  const clearBtn = document.getElementById('clear-history-btn');
  if (!historyList) return;

  if (conversionHistory.length === 0) {
    historyList.innerHTML = '<li class="empty-history">暂无计算历史记录</li>';
    if (clearBtn) clearBtn.style.display = 'none';
    return;
  }

  historyList.innerHTML = '';
  if (clearBtn) clearBtn.style.display = 'block';

  conversionHistory.forEach(item => {
    const fromCur = currencies.find(c => c.code === item.from);
    const toCur = currencies.find(c => c.code === item.to);
    if (!fromCur || !toCur) return;

    const li = document.createElement('li');
    li.className = 'history-item';
    li.innerHTML = `
      <div class="details">
        <span class="amount">${item.amount} ${item.from}</span>
        <span class="pair">${fromCur.flag} ${item.from} ➔ ${toCur.flag} ${item.to}</span>
      </div>
      <span class="arrow-icon">➜</span>
    `;
    li.addEventListener('click', () => {
      amountInput.value = item.amount;
      currentAmount = item.amount;
      updateFromCurrency(item.from);
      updateToCurrency(item.to);
    });
    historyList.appendChild(li);
  });
}

// Clear History Button
document.addEventListener('DOMContentLoaded', () => {
  const clearHistoryBtn = document.getElementById('clear-history-btn');
  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', () => {
      conversionHistory = [];
      localStorage.removeItem('conversion_history');
      renderHistory();
    });
  }
});

// Update Rates-related UI components
function updateRatesUI() {
  performConversion();
  
  if (lastFetchedTime) {
    const formattedDate = lastFetchedTime.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    lastUpdate.textContent = `更新时间: ${formattedDate} (数据源: er-api)`;
  }
  
  renderQuickRates();
  renderHistory();
}

// Render Dropdown lists
function renderDropdownList(listElement, activeCode, onSelect, searchFilter = '') {
  listElement.innerHTML = '';
  
  const cleanFilter = searchFilter.trim().toLowerCase();
  
  const filtered = currencies.filter(c => {
    if (!cleanFilter) return true;
    
    // Check code or name
    const matchesBasic = c.code.toLowerCase().includes(cleanFilter) || c.name.toLowerCase().includes(cleanFilter);
    if (matchesBasic) return true;
    
    // Check dialCode (e.g. "+86" or "86") for precise matching
    if (c.dialCode) {
      const cleanDialCode = c.dialCode.replace('+', '');
      const filterWithoutPlus = cleanFilter.startsWith('+') ? cleanFilter.substring(1) : cleanFilter;
      if (cleanDialCode === filterWithoutPlus) {
        return true;
      }
    }
    return false;
  });
  
  filtered.forEach((currency, index) => {
    const li = document.createElement('li');
    const isFirstMatch = cleanFilter && index === 0;
    li.className = `currency-item ${currency.code === activeCode ? 'selected' : ''} ${isFirstMatch ? 'highlighted' : ''}`;
    li.innerHTML = `
      <span class="flag">${currency.flag}</span>
      <span class="code">${currency.code}</span>
      <span class="name">${currency.name} <small style="opacity:0.6; margin-left:4px;">${currency.dialCode || ''}</small></span>
    `;

    li.addEventListener('click', () => {
      onSelect(currency);
      closeAllDropdowns();
    });
    listElement.appendChild(li);
  });
}

// Close Dropdowns
function closeAllDropdowns() {
  document.getElementById('from-selector-box').classList.remove('active');
  document.getElementById('to-selector-box').classList.remove('active');
}

// Dropdown click controls
fromCurrencyBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const isActive = document.getElementById('from-selector-box').classList.toggle('active');
  document.getElementById('to-selector-box').classList.remove('active');
  if (isActive) {
    fromSearch.value = '';
    renderDropdownList(fromList, fromCurrency, updateFromCurrency);
    fromSearch.focus();
  }
});

toCurrencyBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const isActive = document.getElementById('to-selector-box').classList.toggle('active');
  document.getElementById('from-selector-box').classList.remove('active');
  if (isActive) {
    toSearch.value = '';
    renderDropdownList(toList, toCurrency, updateToCurrency);
    toSearch.focus();
  }
});

// Click outside lists to close them
document.addEventListener('click', () => {
  closeAllDropdowns();
});

fromDropdown.addEventListener('click', (e) => e.stopPropagation());
toDropdown.addEventListener('click', (e) => e.stopPropagation());

// Helper to select the first matched item on Enter keypress
function handleSearchKeydown(e, activeCode, onSelect) {
  if (e.key === 'Enter') {
    const searchFilter = e.target.value.trim().toLowerCase();
    
    // Exact same filtering logic as in renderDropdownList
    const filtered = currencies.filter(c => {
      if (!searchFilter) return c.code === activeCode;
      
      const matchesBasic = c.code.toLowerCase().includes(searchFilter) || c.name.toLowerCase().includes(searchFilter);
      if (matchesBasic) return true;
      
      if (c.dialCode) {
        const cleanDialCode = c.dialCode.replace('+', '');
        const filterWithoutPlus = searchFilter.startsWith('+') ? searchFilter.substring(1) : searchFilter;
        if (cleanDialCode === filterWithoutPlus) return true;
      }
      return false;
    });

    if (filtered.length > 0) {
      onSelect(filtered[0]);
      closeAllDropdowns();
      e.target.value = '';
    }
  }
}

// Search inputs
fromSearch.addEventListener('input', (e) => {
  renderDropdownList(fromList, fromCurrency, updateFromCurrency, e.target.value);
});

fromSearch.addEventListener('keydown', (e) => {
  handleSearchKeydown(e, fromCurrency, updateFromCurrency);
});

toSearch.addEventListener('input', (e) => {
  renderDropdownList(toList, toCurrency, updateToCurrency, e.target.value);
});

toSearch.addEventListener('keydown', (e) => {
  handleSearchKeydown(e, toCurrency, updateToCurrency);
});

// Update specific currency functions
function updateFromCurrency(target) {
  const currency = typeof target === 'string' 
    ? currencies.find(c => c.code === target) 
    : target;
  if (!currency) return;
  selectedFromCountry = currency;
  fromCurrency = currency.code;
  document.getElementById('from-flag').textContent = currency.flag;
  document.getElementById('from-code').textContent = currency.code;
  document.getElementById('from-symbol').textContent = currency.code;
  document.getElementById('from-name').textContent = currency.name.split(' (')[0];
  performConversion();
  saveToHistory(fromCurrency, toCurrency, currentAmount);
}

function updateToCurrency(target) {
  const currency = typeof target === 'string' 
    ? currencies.find(c => c.code === target) 
    : target;
  if (!currency) return;
  selectedToCountry = currency;
  toCurrency = currency.code;
  document.getElementById('to-flag').textContent = currency.flag;
  document.getElementById('to-code').textContent = currency.code;
  document.getElementById('to-name').textContent = currency.name.split(' (')[0];
  performConversion();
  saveToHistory(fromCurrency, toCurrency, currentAmount);
}

// Swap currencies
swapBtn.addEventListener('click', () => {
  const tempCountry = selectedFromCountry;
  updateFromCurrency(selectedToCountry);
  updateToCurrency(tempCountry);
});

// Amount input tracking
amountInput.addEventListener('input', (e) => {
  const val = parseFloat(e.target.value);
  currentAmount = isNaN(val) ? 0 : val;
  performConversion();
});

amountInput.addEventListener('blur', () => {
  saveToHistory(fromCurrency, toCurrency, currentAmount);
});

// Quick shortcuts
document.querySelectorAll('.shortcut-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const val = parseInt(btn.dataset.value);
    amountInput.value = val;
    currentAmount = val;
    performConversion();
    saveToHistory(fromCurrency, toCurrency, currentAmount);
  });
});

// Render Quick Rates Widget
function renderQuickRates() {
  if (!exchangeRates['USD']) return;
  
  // Popular pairs targeting CNY
  const popularPairs = [
    { from: 'USD', to: 'CNY' },
    { from: 'EUR', to: 'CNY' },
    { from: 'GBP', to: 'CNY' },
    { from: 'JPY', to: 'CNY' },
    { from: 'HKD', to: 'CNY' },
    { from: 'AUD', to: 'CNY' }
  ];
  
  quickRatesContainer.innerHTML = '';
  
  popularPairs.forEach(pair => {
    const rateFrom = exchangeRates[pair.from];
    const rateTo = exchangeRates[pair.to];
    if (rateFrom && rateTo) {
      const conversion = rateTo / rateFrom;
      const item = document.createElement('div');
      item.className = 'quick-rate-item';
      item.style.cursor = 'pointer';
      item.innerHTML = `
        <span class="pair">${pair.from} / ${pair.to}</span>
        <span class="value">${conversion.toFixed(4)}</span>
      `;
      // Click to load pair
      item.addEventListener('click', () => {
        updateFromCurrency(pair.from);
        updateToCurrency(pair.to);
      });
      quickRatesContainer.appendChild(item);
    }
  });
}

// Initial Launch
initTheme();
fetchRates();
renderHistory();
// Refresh every 10 minutes
setInterval(fetchRates, 600000);
