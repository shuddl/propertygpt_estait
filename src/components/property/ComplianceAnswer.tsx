import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react';
import { PredictiveSurface } from '@/components/ui/PredictiveSurface';

interface ComplianceItem {
  id: string;
  category: string;
  requirement: string;
  status: 'compliant' | 'warning' | 'non-compliant' | 'unknown';
  description: string;
  actionRequired?: string;
  deadline?: string;
  regulation: string;
}

interface ComplianceData {
  overallStatus: 'compliant' | 'partial' | 'non-compliant';
  items: ComplianceItem[];
  recommendations: string[];
  nextSteps: string[];
}

interface ComplianceAnswerProps {
  data: ComplianceData;
  onInteraction?: (type: string, data: unknown) => void;
}

const getStatusIcon = (status: ComplianceItem['status']) => {
  switch (status) {
    case 'compliant':
      return <CheckCircle className="h-5 w-5 text-green-600" />;
    case 'warning':
      return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
    case 'non-compliant':
      return <XCircle className="h-5 w-5 text-red-600" />;
    default:
      return <Info className="h-5 w-5 text-gray-600" />;
  }
};

const getStatusColor = (status: ComplianceItem['status']) => {
  switch (status) {
    case 'compliant':
      return 'bg-green-100 text-green-800';
    case 'warning':
      return 'bg-yellow-100 text-yellow-800';
    case 'non-compliant':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const ComplianceAnswer: React.FC<ComplianceAnswerProps> = ({ data, onInteraction }) => {
  const handleItemClick = (item: ComplianceItem) => {
    onInteraction?.('compliance-item', item);
  };

  const handleRecommendationClick = (recommendation: string) => {
    onInteraction?.('recommendation', recommendation);
  };

  return (
    <PredictiveSurface className="space-y-6">
      <Card className="anticipatory-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">Compliance Overview</CardTitle>
            <Badge 
              variant={data.overallStatus === 'compliant' ? 'default' : 'destructive'}
              className={data.overallStatus === 'compliant' ? 'bg-green-100 text-green-800' : 
                         data.overallStatus === 'partial' ? 'bg-yellow-100 text-yellow-800' : 
                         'bg-red-100 text-red-800'}
            >
              {data.overallStatus.toUpperCase()}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.items.map((item) => (
              <div 
                key={item.id} 
                className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => handleItemClick(item)}
              >
                <div className="flex items-start gap-3">
                  {getStatusIcon(item.status)}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900">{item.requirement}</h4>
                      <Badge className={getStatusColor(item.status)}>
                        {item.status.replace('-', ' ')}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-gray-600">{item.description}</p>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Category: {item.category}</span>
                      <span>Regulation: {item.regulation}</span>
                      {item.deadline && <span>Deadline: {item.deadline}</span>}
                    </div>
                    
                    {item.actionRequired && (
                      <div className="mt-2 p-2 bg-blue-50 rounded border-l-4 border-blue-400">
                        <p className="text-sm text-blue-800">
                          <strong>Action Required:</strong> {item.actionRequired}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {data.recommendations.length > 0 && (
        <Card className="anticipatory-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {data.recommendations.map((recommendation, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => handleRecommendationClick(recommendation)}
                >
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{recommendation}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {data.nextSteps.length > 0 && (
        <Card className="anticipatory-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Next Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2">
              {data.nextSteps.map((step, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => onInteraction?.('next-step', step)}
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-sm text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      )}
    </PredictiveSurface>
  );
};