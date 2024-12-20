import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ClipboardDocumentIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

function ResultsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const imageUrl = searchParams.get('image');
  const [copied, setCopied] = useState(false);
  
  // This would normally come from your API
  const extractedText = `غیر سرکاری نتائج کے مطابق مرکز اور صوبہ خیبر
پختون خواہ میں تحریک انصاف نے میدان مار لیا۔
پنجاب میں نون لیگ آگے ہے۔ صوبہ سندھ میں
پیپلز پارٹی نے کامیابی حاصل کی۔ کراچی میں ملک
دشمن ایم کیو ایم کا صفایا ہوگیا۔ بلوچستان میں ملا
جلد رجحان ہے۔ یہ نتائج وہی ہیں جس کی بین الاقوامی
میڈیا نے بھی پیشگوئی کی تھی۔ پاکستان میں بھی
تجزیہ کار یہی کہہ رہے تھے کہ اصل مقابلہ تحریک
انصاف اور نون لیگ میں ہو گا اور تحریک انصاف کا
پلڑا بھاری رہے گا۔`;

  const handleCopy = () => {
    navigator.clipboard.writeText(extractedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBack = () => {
    navigate('/');
  };

  if (!imageUrl) {
    return <div>No image provided</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <button
          onClick={handleBack}
          className="flex items-center text-primary hover:underline"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Upload
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <h2 className="text-xl font-semibold p-4 bg-primary text-white">Uploaded Image</h2>
          <div className="p-4">
            <img 
              src={imageUrl} 
              alt="Uploaded content"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <h2 className="text-xl font-semibold p-4 bg-secondary text-white">Extracted Text</h2>
          <div className="p-4">
            <div className="bg-gray-100 rounded-lg p-4 min-h-[300px] text-right" dir="rtl">
              {extractedText}
            </div>
            <div className="mt-4 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopy}
                className={`flex items-center px-4 py-2 rounded-full ${
                  copied ? 'bg-green-500' : 'bg-primary'
                } text-white`}
              >
                <ClipboardDocumentIcon className="w-5 h-5 mr-2" />
                {copied ? 'Copied!' : 'Copy Text'}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ResultsPage;

