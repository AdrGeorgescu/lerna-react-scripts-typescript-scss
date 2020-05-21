import { ReactNode } from 'react';
import './TestComp.scss';
interface TestComp {
    title: string;
    children: ReactNode;
    apples: number;
}
declare const TestComp: ({ title, children }: TestComp) => JSX.Element;
export default TestComp;
//# sourceMappingURL=TestComp.d.ts.map