import React, { Component } from 'react';
import { AreaChart, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts';

export default class Chart extends Component {
    
    render() {
        return (
            <ResponsiveContainer width='100%' height={200}>
                <AreaChart data={this.props.data}
                    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={.9}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={.1}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip formatter={(value, name) => `${value.toFixed(2)} RUB`}/>
                    <Area type="monotone" dataKey="EUR" stroke="#28A76A" fillOpacity={1} fill="url(#color)" />
                    <Area type="monotone" dataKey="USD" stroke="#28A76A" fillOpacity={1} fill="url(#color)" />
                </AreaChart>
            </ResponsiveContainer>
        )
    }
}