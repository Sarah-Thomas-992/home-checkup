import React from 'react';
import './App.css';

// Images Imports
import clutter from './img/clutter.jpg';
import cords from './img/cords.jpg';
import dimHouse from './img/dim-house.jpg';
import disrepair from './img/disrepair.jpg';
import furniture from './img/furniture.jpg';
import grabBars from './img/grab-bars.jpg';
import nightlight from './img/nightlight.jpg';
import rugs from './img/rugs.jpg';
import shelves from './img/shelves.jpg';
import stairs from './img/stairs.jpg';
import tub from './img/tub.jpg';

const questionList = [
    {
        question: "Is the floor cluttered?",
        answerYes: "Yes",
        answerNo: "No",
        actionItem: "Pick up any clutter.",
        image: clutter,
        imageSRC: "A pile of clutter on a desk"
    },
    {
        question: "Are there any rugs on the floor?  If so, are the rugs loose?",
        answerYes: "Yes",
        answerNo: "No",
        actionItem: "Remove rugs or secure them with double-sided tape or non-slip backing.",
        image: rugs,
        imageSRC: "A rug on a kitchen floor"
    }, 
    {
        question: "Is the bathroom missing grab bars next to the tub, inside the tub, or next to the toilet?",
        answerYes: "Yes",
        answerNo: "No",
        actionItem: "Install grab bars in the bathroom next to and inside the tub, and next to the toilet.", 
        image: grabBars,
        imageSRC: "A bathtub"
    },
    {
        question: "Are staircases poorly lit or missing a handrail?  Is there a handrail on only one side of the stairs? Is there only one light switch for the stairs?",
        answerYes: "Yes",
        answerNo: "No",
        actionItem: "Have a light switch installed both at the top and bottom of the stairs.  Install handrails on both sides of the stairs.",
        image: stairs,
        imageSRC: "A modern staircase"
    },
    {
        question: "Is the home poorly lit overall?",
        answerYes: "Yes",
        answerNo: "No",
        actionItem: "Add lamps or overhead lighting until the home is well-lit.",
        image: dimHouse,
        imageSRC: "A dimly lit living room"
    },
    {
        question: "Is anything in the home in obvious disrepair?  This could include loose or torn carpets, broken handrails or steps, or burned-out lightbulbs.",
        answerYes: "Yes",
        answerNo: "No",
        actionItem: "Repair or replace any broken steps or handrails.  Change out burned-out lightbulbs.  Replace torn carpet.",
        image: disrepair,
        imageSRC: "The outside of a stack of rusted houses made of corrugated metal"
    },
    {
        question: "Is any furniture blocking the main pathways of the home?",
        answerYes: "Yes",
        answerNo: "No",
        actionItem: "Move furniture so that the home's main pathways are clear.",
        image: furniture,
        imageSRC: "A living room crowded with furniture"
    },
    {
        question: "Are there any loose wires or cords you have to go around or step over?",
        answerYes: "Yes",
        answerNo: "No",
        actionItem: "Tape wires and cords to the wall, or at least move them against the wall where they aren't a tripping hazard.",
        image: cords,
        imageSRC: "A box of cords"
    },
    {
        question: "Is anything stored in high cupboards or shelves?",
        answerYes: "Yes",
        answerNo: "No",
        actionItem: "Store frequently-used items at waist height.",
        image: shelves,
        imageSRC: "A bathroom sink with a shelf above it"
    },
    {
        question: "Is the nearest light source (lamp or light switch) out of reach from the bed? Is the path between the bedroom and bathroom poorly lit?",
        answerYes: "Yes",
        answerNo: "No",
        actionItem: "Make sure there's a lamp or light switch within easy reach of the bed.  Install a nightlight to make sure the path from the bed to the bathroom is well-lit.",
        image: nightlight,
        imageSRC: "A lit lamp in a darkened bedroom"
    },
    {
        question: "Is it slippery in the tub or shower?",
        answerYes: "Yes",
        answerNo: "No",
        actionItem: "Place self-stick strips or a non-slip rubber mat on the floor of the tub or shower.",
        image: tub,
        imageSRC: "A tub surrounded by plants"
    },
]

export default questionList; 

