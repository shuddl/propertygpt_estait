import { useMemo } from 'react';
import { AsymmetricContainer, AnticipatoryCopywrite, PredictiveSurface } from '@/components/design-system';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { MarketAnalysis } from '@/lib/types';

interface MarketChartProps {
  data: MarketAnalysis;
  chartType?: 'price_trends' | 'inventory' | 'comparison';
}

export const MarketChart: React.FC<MarketChartProps> = ({
  data,
  chartType = 'price_trends'
}) => {
  const chartData = useMemo(() => {
    switch (chartType) {
      case 'price_trends':
        return data.price_trends?.map(trend => ({
          period: trend.period,
          price: trend.median_price,
          change: trend.change_pct
        })) || [];
      
      case 'inventory':
        return data.inventory_analysis?.monthly_data?.map(month => ({
          period: month.period,
          inventory: month.months_supply,
          newListings: month.new_listings
        })) || [];
      
      case 'comparison':
        return data.neighborhood_comparison?.map(neighborhood => ({
          name: neighborhood.name,
          medianPrice: neighborhood.median_price,
          priceChange: neighborhood.price_change_pct
        })) || [];
    }
  }, [data, chartType]);

  return (
    <div className="w-full">
      <AsymmetricContainer
        predictiveLeft={
          <div className="space-y-6">
            <div>
              <AnticipatoryCopywrite variant="predictive-heading">
                Market Analysis
              </AnticipatoryCopywrite>
              <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600 mt-2">
                {data.location} • {data.timeframe}
              </AnticipatoryCopywrite>
            </div>

            {/* Key Metrics */}
            <div className="space-y-4">
              <MarketMetricCard
                label="Median Price"
                value={`$${data.summary.median_price.toLocaleString()}`}
                change={data.summary.price_change_pct}
              />
              
              <MarketMetricCard
                label="Days on Market"
                value={data.summary.days_on_market.toString()}
                change={data.summary.days_on_market <= 30 ? 5 : -5}
                suffix="days"
              />
              
              <MarketMetricCard
                label="Market Tempo"
                value={data.summary.market_tempo.toUpperCase()}
                tempo={data.summary.market_tempo}
              />
            </div>

            {/* Predictive Insights */}
            {data.predictive_insights && data.predictive_insights.length > 0 && (
              <div className="space-y-3">
                <AnticipatoryCopywrite variant="insight-emphasis" anticipatory>
                  Predictive Insights
                </AnticipatoryCopywrite>
                
                {data.predictive_insights.slice(0, 2).map((insight, index) => (
                  <PredictiveSurface
                    key={index}
                    prediction={insight.description}
                    confidence={insight.confidence}
                    variant="elevated"
                    className="p-4"
                  >
                    <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-800">
                      {insight.title}
                    </AnticipatoryCopywrite>
                    <div className="mt-1 text-xs text-intelligent-gray-600">
                      {Math.round(insight.confidence * 100)}% confidence • {insight.timeline}
                    </div>
                  </PredictiveSurface>
                ))}
              </div>
            )}
          </div>
        }
        
        conversationalRight={
          <div className="p-8 space-y-8">
            {/* Chart */}
            <PredictiveSurface variant="elevated" className="p-6">
              <div className="h-80">
                {chartType === 'price_trends' && (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
                      <XAxis 
                        dataKey="period" 
                        stroke="#666666"
                        fontSize={12}
                      />
                      <YAxis 
                        stroke="#666666"
                        fontSize={12}
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                      />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E5E5E5',
                          borderRadius: '8px'
                        }}
                        formatter={(value: any) => [`$${value.toLocaleString()}`, 'Median Price']}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="price" 
                        stroke="#FF0099" 
                        strokeWidth={3}
                        dot={{ fill: '#FF0099', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#FF0099', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                )}

                {chartType === 'comparison' && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
                      <XAxis 
                        dataKey="name" 
                        stroke="#666666"
                        fontSize={12}
                      />
                      <YAxis 
                        stroke="#666666"
                        fontSize={12}
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                      />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E5E5E5',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar 
                        dataKey="medianPrice" 
                        fill="#FF0099"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>
            </PredictiveSurface>

            {/* Recommendations */}
            {data.recommendations && data.recommendations.length > 0 && (
              <div className="space-y-4">
                <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800">
                  Recommendations
                </AnticipatoryCopywrite>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.recommendations.slice(0, 4).map((rec, index) => (
                    <PredictiveSurface
                      key={index}
                      variant="default"
                      className="p-4 border border-intelligent-gray-200"
                    >
                      <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 mb-2">
                        {rec.title}
                      </AnticipatoryCopywrite>
                      <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
                        {rec.description}
                      </AnticipatoryCopywrite>
                    </PredictiveSurface>
                  ))}
                </div>
              </div>
            )}
          </div>
        }
      />
    </div>
  );
};

interface MarketMetricCardProps {
  label: string;
  value: string;
  change?: number;
  suffix?: string;
  tempo?: string;
}

const MarketMetricCard: React.FC<MarketMetricCardProps> = ({
  label,
  value,
  change,
  suffix,
  tempo
}) => {
  const getTrendColor = () => {
    if (tempo) {
      switch (tempo) {
        case 'hot': return 'text-red-500';
        case 'warm': return 'text-orange-500';
        case 'cool': return 'text-blue-500';
        case 'cold': return 'text-blue-700';
        default: return 'text-intelligent-gray-600';
      }
    }
    
    if (change === undefined) return 'text-intelligent-gray-600';
    return change > 0 ? 'text-green-500' : 'text-red-500';
  };

  return (
    <PredictiveSurface variant="default" className="p-4 border border-intelligent-gray-200">
      <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600 mb-1">
        {label}
      </AnticipatoryCopywrite>
      <div className="flex items-end justify-between">
        <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800">
          {value}
          {suffix && <span className="text-xs ml-1">{suffix}</span>}
        </AnticipatoryCopywrite>
        
        {change !== undefined && (
          <div className={`text-xs ${getTrendColor()}`}>
            {change > 0 ? '↑' : change < 0 ? '↓' : '→'} {Math.abs(change).toFixed(1)}%
          </div>
        )}
      </div>
    </PredictiveSurface>
  );
};