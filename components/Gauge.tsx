import { useEffect, useRef } from "react";
import SvgGauge, { GaugeOptions, GaugeInstance } from "svg-gauge";
import React from "react";

const Gauge = ({ value }: Props) => {
  const gaugeEl = useRef<HTMLDivElement>(null);
  const gaugeRef = useRef<GaugeInstance | null>(null);
  useEffect(() => {
    if (!gaugeRef.current) {
      if (!gaugeEl.current) return;
      const options: GaugeOptions = {
        color: (value) => (value < 5 ? "green" : value <= 7 ? "yellow" : "red"),
        min: 1,
        max: 10,
        label: (value) => (value < 5 ? "Low" : value <= 7 ? "Mid" : "High"),
      };
      gaugeRef.current = SvgGauge(gaugeEl.current, options);
      gaugeRef.current?.setValue(1);
    }
    gaugeRef.current?.setValueAnimated(value, 1);
  }, [value]);

  return (
    <div className="w-[180px] h-[180px] absolute -right-5">
      <div ref={gaugeEl} />
    </div>
  );
};

interface Props {
  value: number;
}

export default Gauge;
