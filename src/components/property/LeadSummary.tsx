import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Phone, Mail, MapPin, Calendar, DollarSign, Home, TrendingUp } from 'lucide-react';
import { PredictiveSurface } from '@/components/ui/PredictiveSurface';

interface LeadContact {
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  location: string;
}

interface LeadPreferences {
  priceRange: {
    min: number;
    max: number;
  };
  propertyTypes: string[];
  preferredAreas: string[];
  timeline: string;
  financing: 'cash' | 'mortgage' | 'mixed';
}

interface LeadActivity {
  date: string;
  action: string;
  property?: string;
  notes?: string;
}

interface LeadData {
  id: string;
  contact: LeadContact;
  preferences: LeadPreferences;
  score: number;
  status: 'new' | 'qualified' | 'hot' | 'cold' | 'converted';
  lastActivity: string;
  recentActivities: LeadActivity[];
  estimatedValue: number;
  probability: number;
}

interface LeadSummaryProps {
  data: LeadData;
  onInteraction?: (type: string, data: unknown) => void;
}

const getStatusColor = (status: LeadData['status']) => {
  switch (status) {
    case 'new':
      return 'bg-blue-100 text-blue-800';
    case 'qualified':
      return 'bg-green-100 text-green-800';
    case 'hot':
      return 'bg-red-100 text-red-800';
    case 'cold':
      return 'bg-gray-100 text-gray-800';
    case 'converted':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getScoreColor = (score: number) => {
  if (score >= 80) return 'text-green-600';
  if (score >= 60) return 'text-yellow-600';
  return 'text-red-600';
};

export const LeadSummary: React.FC<LeadSummaryProps> = ({ data, onInteraction }) => {
  const handleContactAction = (action: string) => {
    onInteraction?.(action, data.contact);
  };

  const handleActivityClick = (activity: LeadActivity) => {
    onInteraction?.('activity', activity);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <PredictiveSurface className="space-y-6">
      <Card className="anticipatory-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">Lead Summary</CardTitle>
            <div className="flex items-center gap-2">
              <Badge className={getStatusColor(data.status)}>
                {data.status.toUpperCase()}
              </Badge>
              <span className={`text-2xl font-bold ${getScoreColor(data.score)}`}>
                {data.score}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={data.contact.avatar} alt={data.contact.name} />
              <AvatarFallback>{getInitials(data.contact.name)}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">{data.contact.name}</h3>
              
              <div className="space-y-1">
                <div 
                  className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={() => handleContactAction('email')}
                >
                  <Mail className="h-4 w-4" />
                  {data.contact.email}
                </div>
                
                <div 
                  className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={() => handleContactAction('phone')}
                >
                  <Phone className="h-4 w-4" />
                  {data.contact.phone}
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  {data.contact.location}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <DollarSign className="h-5 w-5 mx-auto text-green-600 mb-1" />
              <div className="text-lg font-semibold text-gray-900">
                ${data.estimatedValue.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500">Estimated Value</div>
            </div>
            
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <TrendingUp className="h-5 w-5 mx-auto text-blue-600 mb-1" />
              <div className="text-lg font-semibold text-gray-900">
                {data.probability}%
              </div>
              <div className="text-xs text-gray-500">Conversion Probability</div>
            </div>
            
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <Calendar className="h-5 w-5 mx-auto text-purple-600 mb-1" />
              <div className="text-lg font-semibold text-gray-900">
                {data.preferences.timeline}
              </div>
              <div className="text-xs text-gray-500">Timeline</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="anticipatory-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Price Range</h4>
            <div className="text-lg font-semibold text-gray-900">
              ${data.preferences.priceRange.min.toLocaleString()} - ${data.preferences.priceRange.max.toLocaleString()}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Property Types</h4>
            <div className="flex flex-wrap gap-2">
              {data.preferences.propertyTypes.map((type, index) => (
                <Badge key={index} variant="outline" className="cursor-pointer hover:bg-gray-100">
                  <Home className="h-3 w-3 mr-1" />
                  {type}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Preferred Areas</h4>
            <div className="flex flex-wrap gap-2">
              {data.preferences.preferredAreas.map((area, index) => (
                <Badge key={index} variant="outline" className="cursor-pointer hover:bg-gray-100">
                  <MapPin className="h-3 w-3 mr-1" />
                  {area}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Financing</h4>
            <Badge className="bg-blue-100 text-blue-800 capitalize">
              {data.preferences.financing}
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="anticipatory-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.recentActivities.map((activity, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg border hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => handleActivityClick(activity)}
              >
                <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{activity.action}</span>
                    <span className="text-xs text-gray-500">{activity.date}</span>
                  </div>
                  {activity.property && (
                    <div className="text-sm text-gray-600 mt-1">
                      Property: {activity.property}
                    </div>
                  )}
                  {activity.notes && (
                    <div className="text-sm text-gray-500 mt-1">
                      {activity.notes}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </PredictiveSurface>
  );
};