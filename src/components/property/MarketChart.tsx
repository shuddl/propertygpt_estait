import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { PredictiveSurface } from '@/components/ui/PredictiveSurface';

interface MarketTrend {
  period: string;
  averagePrice: number;
  volume: number;
  priceChange: number;
}

interface MarketData {
  trends: MarketTrend[];
  marketInsights: {
    growth: string;
    hotAreas: string[];
    forecast: string;
  };
  comparison: {
    neighborhood: number;
    city: number;
    state: number;
  };
}

interface MarketChartProps {
  data: MarketData;
  onInteraction?: (type: string, data: unknown) => void;
}

export const MarketChart: React.FC<MarketChartProps> = ({ data, onInteraction }) => {
  const handleChartInteraction = (chartType: string, dataPoint: unknown) => {
    onInteraction?.(chartType, dataPoint);
  };

  return (
    <PredictiveSurface className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="anticipatory-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Price Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={data.trends}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                onClick={(data) => handleChartInteraction('price-trend', data)}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" />
                <YAxis />
                <Tooltip 
                  formatter={(value: number) => [`$${value.toLocaleString()}`, 'Average Price']}
                  labelFormatter={(label) => `Period: ${label}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="averagePrice" 
                  stroke="#2563eb" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="anticipatory-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Sales Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                data={data.trends}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                onClick={(data) => handleChartInteraction('volume', data)}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" />
                <YAxis />
                <Tooltip 
                  formatter={(value: number) => [value, 'Sales Volume']}
                  labelFormatter={(label) => `Period: ${label}`}
                />
                <Bar dataKey="volume" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="anticipatory-card">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Neighborhood</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              ${data.comparison.neighborhood.toLocaleString()}
            </div>
            <p className="text-sm text-gray-500">Avg Price/sqft</p>
          </CardContent>
        </Card>

        <Card className="anticipatory-card">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">City Average</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              ${data.comparison.city.toLocaleString()}
            </div>
            <p className="text-sm text-gray-500">Avg Price/sqft</p>
          </CardContent>
        </Card>

        <Card className="anticipatory-card">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">State Average</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">
              ${data.comparison.state.toLocaleString()}
            </div>
            <p className="text-sm text-gray-500">Avg Price/sqft</p>
          </CardContent>
        </Card>
      </div>

      <Card className="anticipatory-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Market Insights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-800">Growth Outlook</h4>
            <p className="text-gray-600">{data.marketInsights.growth}</p>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-800">Hot Areas</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {data.marketInsights.hotAreas.map((area, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm cursor-pointer hover:bg-blue-200 transition-colors"
                  onClick={() => handleChartInteraction('hot-area', area)}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-800">Forecast</h4>
            <p className="text-gray-600">{data.marketInsights.forecast}</p>
          </div>
        </CardContent>
      </Card>
    </PredictiveSurface>
  );
};