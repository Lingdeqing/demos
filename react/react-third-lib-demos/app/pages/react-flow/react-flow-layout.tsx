import { initialNodes, initialEdges } from './nodes-edges';
import ELK from 'elkjs/lib/elk.bundled.js';
import React, { useCallback, useLayoutEffect } from 'react';
import {
    Background,
    ReactFlow,
    ReactFlowProvider,
    addEdge,
    Panel,
    useNodesState,
    useEdgesState,
    useReactFlow,
} from 'reactflow';

import 'reactflow/dist/style.css';

const elk = new ELK();

// Elk has a *huge* amount of options to configure. To see everything you can
// tweak check out:
//
// - https://www.eclipse.org/elk/reference/algorithms.html
// - https://www.eclipse.org/elk/reference/options.html
const elkOptions = {
    'elk.algorithm': 'layered',
    'elk.layered.spacing.nodeNodeBetweenLayers': '100',
    'elk.spacing.nodeNode': '80',
};

const getLayoutedElements = (nodes, edges, options = {}) => {
    const isHorizontal = options?.['elk.direction'] === 'RIGHT';
    const graph = {
        id: 'root',
        layoutOptions: options,
        children: nodes.map((node) => ({
            ...node,
            // Adjust the target and source handle positions based on the layout
            // direction.
            targetPosition: isHorizontal ? 'left' : 'top',
            sourcePosition: isHorizontal ? 'right' : 'bottom',

            // Hardcode a width and height for elk to use when layouting.
            width: 150,
            height: 50,
        })),
        edges: edges,
    };

    return elk
        .layout(graph)
        .then((layoutedGraph) => ({
            nodes: layoutedGraph.children.map((node) => ({
                ...node,
                // React Flow expects a position property on the node instead of `x`
                // and `y` fields.
                position: { x: node.x, y: node.y },
            })),

            edges: layoutedGraph.edges,
        }))
        .catch(console.error);
};

function LayoutFlow() {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const { fitView, getNodes, getEdges } = useReactFlow();
    console.log('===>> nodes', nodes, edges)

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);
    const onLayout = useCallback(
        ({ direction, useInitialNodes = false }) => {
            const opts = { 'elk.direction': direction, ...elkOptions };
            const ns = useInitialNodes ? initialNodes : getNodes();
            const es = useInitialNodes ? initialEdges : getEdges();

            getLayoutedElements(ns, es, opts).then(
                ({ nodes: layoutedNodes, edges: layoutedEdges }) => {
                    setNodes(layoutedNodes);
                    setEdges(layoutedEdges);
                    fitView();
                },
            );
        },
        [nodes, edges],
    );

    // Calculate the initial layout on mount.
    useLayoutEffect(() => {
        onLayout({ direction: 'RIGHT', useInitialNodes: true });
    }, []);

    const insertNode = () => {
        setNodes([

            {
                id: '1',
                type: 'input',
                data: { label: 'input' },
                position: { x: 0, y: 0 },
            },
            {
                id: '2',
                data: { label: 'node 2' },
                position: { x: 0, y: 0 },
            },

            {
                id: '4',
                data: { label: 'node 4' },
                position: { x: 0, y: 100 },
            },
            {
                id: '3',
                data: { label: 'node 3' },
                position: { x: 0, y: 200 },
            },

        ])
        setEdges([
            { id: 'e12', source: '1', target: '2', type: 'smoothstep' },
            { id: 'e14', source: '1', target: '4', type: 'smoothstep' },
            { id: 'e13', source: '1', target: '3', type: 'smoothstep' },
        ])
        setTimeout(() => {
            onLayout({ direction: 'RIGHT', useInitialNodes: false });
        })
    }

    return (

        <div style={{ height: 800 }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onConnect={onConnect}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
                style={{ backgroundColor: '#F7F9FB' }}
            >
                <Panel position="top-right">
                    <button onClick={() => insertNode()}>vertical layout</button>

                    <button onClick={() => insertNode()}>
                        horizontal layout
                    </button>
                </Panel>
                <Background />
            </ReactFlow>
        </div>
    );
}

export default () => (
    <ReactFlowProvider>
        <LayoutFlow />
    </ReactFlowProvider>
);