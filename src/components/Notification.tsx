import { CheckCircle, XCircle, X } from 'lucide-react';

interface NotificationProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

export function Notification({ type, message, onClose }: NotificationProps) {
  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg max-w-sm ${
        type === 'success' ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'
      }`}>
        {type === 'success' ? (
          <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
        ) : (
          <XCircle className="text-red-600 flex-shrink-0" size={20} />
        )}
        <p className={`text-sm font-medium ${type === 'success' ? 'text-emerald-800' : 'text-red-800'}`}>
          {message}
        </p>
        <button
          onClick={onClose}
          className={`ml-2 ${type === 'success' ? 'text-emerald-600 hover:text-emerald-800' : 'text-red-600 hover:text-red-800'}`}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
