# AgrINova - Smart Farming Assistant

An AI-powered farming solution designed to empower farmers with smart, data-driven decisions. AgrINova integrates AI, IoT, and market intelligence to help farmers optimize crop yields while adapting to climate change.

## 🌾 Features

### 1. **Smart Crop Advisor**
- AI-powered crop recommendations based on soil type, pH level, rainfall, and temperature
- Personalized farming strategies
- Expected yield and profitability predictions
- Actionable farming tips

### 2. **Weather Insights**
- Real-time weather forecasts
- Climate alerts and warnings
- 5-day weather predictions
- Weather-based farming recommendations

### 3. **Market Intelligence**
- Live crop prices and market trends
- Price comparison by region
- Best selling time recommendations
- Market volatility analysis

### 4. **Disease Detection**
- AI-powered image analysis for crop disease detection
- Disease identification with confidence scores
- Treatment recommendations
- Prevention strategies

### 5. **Smart Farm Plan**
- IoT sensor monitoring (soil moisture, temperature, humidity)
- Real-time farm data visualization
- Automated task scheduling
- Smart farming recommendations

### 6. **Farmer Community**
- Connect with 50K+ active farmers
- Share farming experiences and best practices
- Popular discussions and resources
- Top contributor recognition

## 🚀 Tech Stack

- **Framework**: Next.js 16.0.1
- **UI Library**: React 19.2.0
- **Styling**: TailwindCSS 4
- **Components**: shadcn/ui
- **Charts**: Recharts 2.15.4
- **Icons**: Lucide React 0.553.0
- **Forms**: React Hook Form 7.66.0
- **Validation**: Zod 4.1.12
- **Notifications**: Sonner 2.0.7

## 📁 Project Structure

```
agrinova2/
├── app/
│   ├── page.tsx                 # Home page
│   ├── crop-advisor/page.tsx    # Crop recommendations
│   ├── weather/page.tsx         # Weather forecasts
│   ├── market/page.tsx          # Market prices
│   ├── disease-detection/page.tsx # Disease detection
│   ├── farm-plan/page.tsx       # IoT monitoring
│   ├── community/page.tsx       # Farmer community
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/
│   ├── navbar.tsx               # Navigation bar
│   └── ui/                      # shadcn/ui components
├── public/                      # Static assets
└── package.json                 # Dependencies
```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd agrinova2
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach, works on all devices
- **Beautiful UI**: Modern gradient backgrounds and smooth animations
- **Accessible**: WCAG compliant components
- **Dark Mode Ready**: Built with theme support
- **Interactive Charts**: Real-time data visualization
- **Professional Color Scheme**: Green/emerald theme for agriculture

## 🔄 Data Flow

1. **User Input** → Farm details, images, or queries
2. **AI Processing** → Analysis and recommendations
3. **Data Visualization** → Charts and insights
4. **Actionable Output** → Specific farming recommendations

## 🌱 Key Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Landing page with features |
| Crop Advisor | `/crop-advisor` | Get crop recommendations |
| Weather | `/weather` | Check weather forecasts |
| Market | `/market` | View market prices |
| Disease Detection | `/disease-detection` | Analyze crop diseases |
| Farm Plan | `/farm-plan` | Monitor farm with IoT |
| Community | `/community` | Connect with farmers |

## 💡 Future Enhancements

- Blockchain integration for farm-to-market traceability
- AR/VR crop training simulations
- Drone and robotics integration
- AI climate models for long-term planning
- Smart credit and loan systems

## 📝 Team

**AgrINova Team**
- Ayush Tandale
- Raj Sankpal
- Kalpesh Bire
- Sarthak Sarnaik
- Rohan Gaikwad

## 📄 License

This project is part of a hackathon submission for Smart and Climate-Resilient Agriculture.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For support, please contact the development team or open an issue in the repository.

---

**AgrINova - Empowering Farmers, Enriching Futures** 🌾
