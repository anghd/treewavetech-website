import Image from 'next/image'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          无线音频技术领导者
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          专注研发高品质蓝牙耳机、智能音响及专业音频解决方案
        </p>
      </div>

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
        ].map((product, index) => (
          <div 
            key={index} 
            className="border rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600">{product.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
