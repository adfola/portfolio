import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, FileUp } from 'lucide-react';
import ScrollFloat from '@/components/ui/ScrollFloat';
import DecryptedText from '@/components/ui/DecryptedText';
import { useState } from 'react';

const whatsappNumber = '2347064663342'; // Nigerian country code
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Adekola — I'd like to get in touch about a project.")}`;
const email = 'adekolafolarin62@gmail.com';
const mailto = `mailto:${email}?subject=${encodeURIComponent("Let's build something great")}&body=${encodeURIComponent("Hi Adekola,\n\nI'd love to discuss an opportunity.")}`;

 export const ContactSection = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResumeFile(file);
      setUploadStatus('success');
      setTimeout(() => setUploadStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="container relative mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollFloat 
            containerClassName="text-3xl md:text-4xl font-bold mb-4"
            scrollStart="top bottom-=20%"
            scrollEnd="bottom top+=30%"
          >
            Let's Connect
          </ScrollFloat>
          <p className="text-muted-foreground mt-3">
            Prefer WhatsApp or Email? Choose what works best for you — I'll get back quickly.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="btn-neon w-full sm:w-auto">
              <a href={mailto} aria-label="Email Adekola">
                <Mail className="mr-2" /> Email Me
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-primary/50 hover:bg-primary/10">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Adekola">
                <MessageCircle className="mr-2" /> WhatsApp
              </a>
            </Button>
          </div>

          {/* Resume Upload Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-primary/20"
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">Share Your Resume</h3>
            <div className="flex justify-center">
              <motion.label
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative cursor-pointer"
              >
                <div className="px-6 py-4 border-2 border-dashed border-primary/30 rounded-lg hover:border-primary/60 transition-colors bg-primary/5">
                  <FileUp className="mx-auto mb-2 text-primary" size={24} />
                  <p className="text-sm font-medium text-foreground">
                    {resumeFile ? `✓ ${resumeFile.name}` : 'Upload your resume (PDF, DOC)'}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Click to select file</p>
                </div>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                  className="hidden"
                  aria-label="Upload resume"
                />
              </motion.label>
            </div>
            {uploadStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm text-green-500 mt-2"
              >
                ✓ Resume uploaded successfully!
              </motion.p>
            )}
          </motion.div>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>
              Email: <a className="underline" href={`mailto:${email}`}>{email}</a>
              <span className="mx-2">•</span>
              WhatsApp: <span>+{whatsappNumber}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};