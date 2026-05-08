// src/app/[locale]/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
          TreeWave Tech
        </h1>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
          高品质音频设备制造商 | 专注无线耳机与智能音响研发
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "旗舰降噪耳机", 
              desc: "主动降噪技术 | 30小时续航 | 专业级音质" 
            },
            { 
              title: "便携智能音响", 
              desc: "IPX7防水 | 360°环绕声 | 语音助手支持" 
            },
            { 
              title: "专业会议麦克风", 
              desc: "6麦克风阵列 | 噪声抑制 | 即插即用" 
            }
          ].map((product, i) => (
            <div key={i} className="border rounded-xl p-6 shadow-md hover:shadow-lg transition">
              {/* 用 div 代替 Image 组件（无外部依赖） */}
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4" />
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="text-gray-600 mt-2">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
