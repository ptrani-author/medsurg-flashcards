const flashcardsGroup3 = [
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A 72-year-old male with a history of hypertension and smoking presents with substernal chest pressure described as \"heavy,\" rated 8/10, radiating to his left arm, accompanied by diaphoresis and nausea for the past hour. Initial vital signs are BP 155/90, HR 110, RR 22, SpO2 95% on room air.",
    question: "What is the nurse's highest priority initial action based on these findings?",
    answer: `<h3>ANSWER:</h3>
    <p>The nurse's highest priority initial action is to obtain a <strong>12-lead ECG</strong>.</p>
    <ul>
      <li>Rapid identification of ST-segment elevation myocardial infarction (STEMI) is crucial for timely reperfusion therapy.</li>
      <li>While other actions (oxygen if indicated, aspirin, IV access, full assessment) are important, the ECG provides the most critical diagnostic information to guide immediate treatment decisions (PCI or fibrinolytics).</li>
      <li>The goal is ECG acquisition and interpretation within <strong>10 minutes</strong> of patient arrival/presentation.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A 65-year-old female with known chronic heart failure (HF) reports increasing shortness of breath over 3 days, now occurring with minimal exertion. Assessment reveals bilateral basilar crackles, 2+ pitting edema in lower extremities, and jugular venous distension (JVD) at 45 degrees. Her daily weight has increased by 4 kg this week.",
    question: "Which laboratory test is most specific for evaluating the severity and potential exacerbation of this patient's heart failure?",
    answer: `<h3>ANSWER:</h3>
    <p><strong>B-type Natriuretic Peptide (BNP)</strong> or NT-proBNP is the most specific laboratory test for evaluating heart failure exacerbation and severity.</p>
    <ul>
      <li>BNP/NT-proBNP is released from the ventricles in response to increased myocardial stretch and pressure due to volume overload.</li>
      <li>Elevated levels correlate with HF severity and help differentiate dyspnea due to HF from pulmonary causes.</li>
      <li>Serial measurements can help monitor response to therapy (e.g., diuretics).</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient underwent cardiac catheterization via the right femoral artery 2 hours ago. The nurse observes that the patient's right foot is cool, pale, and the dorsalis pedis pulse is difficult to palpate with doppler, compared to the left foot which is warm with a strong pulse. The patient reports numbness in the right foot.",
    question: "What is the nurse's priority action?",
    answer: `<h3>ANSWER:</h3>
    <p>The nurse's priority action is to <strong>immediately notify the healthcare provider</strong>.</p>
    <ul>
      <li>These findings (pallor, coolness, diminished pulse, numbness) strongly suggest <strong>acute arterial occlusion</strong> (thrombosis or embolism) in the affected extremity, a potential complication of cardiac catheterization.</li>
      <li>This is a vascular emergency requiring urgent intervention to restore blood flow and prevent limb loss.</li>
      <li>While continuing assessments is important, prompt notification is crucial for timely diagnosis and treatment.</li>
    </ul>`
  },
  {
    category: "pharmacology",
    type: "Pharmacology",
    scenario: "A patient with atrial fibrillation (AFib) has been started on warfarin therapy. The patient asks the nurse about dietary restrictions while taking this medication.",
    question: "What is the most important dietary teaching point for a patient newly prescribed warfarin?",
    answer: `<h3>ANSWER:</h3>
    <p>The most important dietary teaching point is the need to maintain a <strong>consistent intake of Vitamin K-rich foods</strong>.</p>
    <ul>
      <li>Warfarin works by inhibiting Vitamin K-dependent clotting factors.</li>
      <li>Drastic increases or decreases in Vitamin K intake (found primarily in leafy green vegetables) can significantly alter the INR, leading to subtherapeutic levels (clot risk) or supratherapeutic levels (bleeding risk).</li>
      <li>The goal is <strong>consistency</strong> in dietary Vitamin K, not complete avoidance.</li>
      <li>Patients should inform their provider of any significant planned dietary changes.</li>
    </ul>`
  },
  {
    category: "pharmacology",
    type: "Pharmacology",
    scenario: "A patient develops symptomatic sinus bradycardia with a heart rate of 38 bpm, reporting dizziness and showing hypotension (BP 85/50 mmHg). The monitor confirms sinus bradycardia.",
    question: "According to ACLS guidelines referenced in the management of bradycardia, what is the first-line medication the nurse should anticipate administering?",
    answer: `<h3>ANSWER:</h3>
    <p>The first-line medication for symptomatic sinus bradycardia is <strong>Atropine</strong>.</p>
    <ul>
      <li>Atropine is an anticholinergic drug that blocks vagal effects on the SA and AV nodes, increasing heart rate.</li>
      <li>The standard dose is <strong>0.5 mg IV push</strong>, repeatable up to a maximum of 3 mg.</li>
      <li>If atropine is ineffective, transcutaneous pacing or dopamine/epinephrine infusion should be considered.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A 58-year-old male presents with intermittent leg pain (aching and cramping) in his calves that occurs predictably after walking two blocks and is relieved by rest. He has diminished pedal pulses bilaterally.",
    question: "Based on the hallmark symptom described, what condition should the nurse suspect, and what is the priority nursing focus for ongoing management?",
    answer: `<h3>ANSWER:</h3>
    <p>The nurse should suspect <strong>Peripheral Artery Disease (PAD)</strong> based on the hallmark symptom of <strong>intermittent claudication</strong>.</p>
    <p><strong>Priority Nursing Focus for Ongoing Management:</strong></p>
    <ul>
      <li>Aggressive risk factor modification, especially <strong>smoking cessation</strong> (critical).</li>
      <li>Management of hypertension, hyperlipidemia (statins), and diabetes.</li>
      <li>Promoting regular exercise (walking program) within tolerance.</li>
      <li>Meticulous foot care education (daily inspection, proper footwear, avoiding injury/temperature extremes).</li>
      <li>Medication adherence (antiplatelets like aspirin or clopidogrel).</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient admitted with infective endocarditis (IE) suddenly develops right-sided weakness, facial droop, and slurred speech.",
    question: "What complication of IE does the nurse suspect, and what is the immediate nursing action?",
    answer: `<h3>ANSWER:</h3>
    <p>The nurse suspects <strong>systemic embolization</strong>, specifically an <strong>embolic stroke</strong>, resulting from vegetation dislodging from a heart valve (likely left-sided).</p>
    <p><strong>Immediate Nursing Actions:</strong></p>
    <ol>
      <li>Assess ABCs and perform a rapid neurological assessment (e.g., NIH Stroke Scale).</li>
      <li>Notify the healthcare provider <strong>immediately</strong>/activate stroke alert protocol.</li>
      <li>Monitor vital signs closely.</li>
      <li>Prepare the patient for urgent diagnostic imaging (e.g., CT scan).</li>
      <li>Maintain patient safety (bed low, side rails up per policy).</li>
    </ol>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient is scheduled for a Transesophageal Echocardiogram (TEE). The nurse is reviewing pre-procedure preparations.",
    question: "What are the essential nursing pre-procedure checks and preparations specific to a TEE?",
    answer: `<h3>ANSWER:</h3>
    <p>Essential pre-procedure nursing care for TEE includes:</p>
    <ul>
      <li>Confirming <strong>NPO status</strong> (usually 6-8 hours) to reduce aspiration risk.</li>
      <li>Verifying informed consent is obtained.</li>
      <li>Assessing for allergies and history of esophageal disorders.</li>
      <li>Establishing IV access for sedation administration.</li>
      <li>Explaining the procedure, including sedation and throat numbing spray.</li>
      <li>Removing dentures or partial plates.</li>
      <li>Obtaining baseline vital signs and SpO2.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient is in Ventricular Fibrillation (VF). Cardiopulmonary resuscitation (CPR) is in progress. The defibrillator has been attached and shows VF.",
    question: "What is the immediate next step in management according to ACLS guidelines for VF?",
    answer: `<h3>ANSWER:</h3>
    <p>The immediate next step is to deliver an <strong>unsynchronized high-energy shock (defibrillation)</strong>.</p>
    <ul>
      <li>VF is a shockable, life-threatening pulseless rhythm.</li>
      <li>Ensure "<strong>all clear</strong>" for safety before delivering the shock.</li>
      <li>Immediately resume high-quality CPR for 2 minutes after the shock delivery, minimizing interruptions.</li>
      <li>Defibrillation must be <strong>unsynchronized</strong> for VF.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient admitted with an acute myocardial infarction (AMI) develops sharp, pleuritic chest pain that worsens with deep breathing and lying flat, but improves when leaning forward. The nurse auscultates a grating sound over the left sternal border.",
    question: "What complication of AMI should the nurse suspect, and what is the priority nursing intervention?",
    answer: `<h3>ANSWER:</h3>
    <p>The nurse should suspect <strong>acute pericarditis</strong> (specifically post-MI pericarditis, potentially Dressler's syndrome if later onset). The grating sound is a <strong>pericardial friction rub</strong>.</p>
    <p><strong>Priority Nursing Intervention:</strong></p>
    <ul>
      <li><strong>Pain management:</strong> Administer NSAIDs as prescribed (first-line therapy).</li>
      <li><strong>Positioning:</strong> Encourage the patient to sit up and lean forward for comfort.</li>
      <li><strong>Monitoring:</strong> Assess frequently for signs of <strong>cardiac tamponade</strong> (hypotension, JVD, muffled heart sounds, pulsus paradoxus) – a potential complication of pericarditis.</li>
      <li><strong>Reassurance:</strong> Educate the patient about the condition.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient had a permanent pacemaker inserted yesterday. The nurse is providing discharge instructions about activity limitations.",
    question: "What specific activity restrictions should the nurse emphasize for the initial post-implantation period (typically 4-6 weeks)?",
    answer: `<h3>ANSWER:</h3>
    <p>Essential activity restrictions following pacemaker implantation include:</p>
    <ul>
      <li>Limiting arm and shoulder movement on the operative side.</li>
      <li>Avoid lifting the affected arm <strong>above shoulder level</strong>.</li>
      <li>Avoid lifting heavy objects (typically > 5-10 lbs, per provider instructions).</li>
      <li>These restrictions help prevent lead dislodgement while the leads secure themselves within the heart tissue.</li>
      <li>Avoid direct trauma to the pacemaker site.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A nurse is assessing a patient with known severe Aortic Stenosis (AS). The patient reports recent onset of dizziness upon exertion and one episode of near-syncope while climbing stairs.",
    question: "What is the clinical significance of these new symptoms in a patient with severe AS?",
    answer: `<h3>ANSWER:</h3>
    <p>The onset of exertional dizziness and syncope in a patient with severe Aortic Stenosis signifies worsening disease and is associated with a <strong>poor prognosis</strong> if the valve is not replaced.</p>
    <ul>
      <li>These symptoms (along with angina and dyspnea/HF symptoms) indicate that the stenotic valve is significantly impeding cardiac output, especially during increased demand.</li>
      <li>Symptomatic severe AS is a strong indication for urgent evaluation for <strong>aortic valve replacement</strong> (surgical or TAVR).</li>
      <li>Nitrates and potent vasodilators should be used with <strong>extreme caution</strong> as they can cause profound hypotension due to fixed cardiac output.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient returns from a Percutaneous Coronary Intervention (PCI) with stent placement via the radial artery. A compression band (TR Band) is in place on the wrist.",
    question: "What are the key nursing assessments specific to radial artery access site management post-PCI?",
    answer: `<h3>ANSWER:</h3>
    <p>Key nursing assessments for radial artery access site management include:</p>
    <ul>
      <li>Assess the access site frequently for <strong>bleeding, oozing, hematoma formation</strong>, swelling, and tenderness.</li>
      <li>Monitor the compression band for correct placement and pressure; deflate/remove per protocol (often gradual).</li>
      <li>Perform frequent <strong>neurovascular checks</strong> of the affected hand: Assess radial/ulnar pulses, capillary refill, skin color, temperature, sensation, and movement.</li>
      <li>Assess for signs of radial artery occlusion (pain, pallor, diminished pulse, coolness).</li>
      <li>Compare assessments to the contralateral hand.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient presents with acute onset shortness of breath. Assessment reveals tachypnea, crackles in bilateral lung bases, SpO2 of 88% on room air, and pink, frothy sputum.",
    question: "These findings are most indicative of which specific type of heart failure?",
    answer: `<h3>ANSWER:</h3>
    <p>These findings are most indicative of acute decompensated <strong>Left-sided Heart Failure</strong> leading to <strong>pulmonary edema</strong>.</p>
    <p><strong>Key Indicators:</strong></p>
    <ul>
      <li><strong>Dyspnea/Tachypnea:</strong> Due to fluid backing up into the pulmonary circulation.</li>
      <li><strong>Crackles (Rales):</strong> Indicate fluid in the alveoli.</li>
      <li><strong>Hypoxemia (Low SpO2):</strong> Impaired gas exchange across fluid-filled alveoli.</li>
      <li><strong>Pink, Frothy Sputum:</strong> Classic sign of severe pulmonary edema, fluid mixed with air and red blood cells.</li>
      <li>Hypertension is a common underlying cause.</li>
    </ul>`
  },
  {
    category: "pharmacology",
    type: "Pharmacology",
    scenario: "A nurse is monitoring a patient receiving intravenous nitroglycerin for unstable angina. The patient's blood pressure is 88/55 mmHg, and they report feeling lightheaded.",
    question: "What is the nurse's priority action?",
    answer: `<h3>ANSWER:</h3>
    <p>The nurse's priority action is to <strong>decrease or stop the nitroglycerin infusion</strong> according to protocol/orders and notify the provider.</p>
    <ul>
      <li>Nitroglycerin is a potent vasodilator that reduces preload and afterload, but can cause significant hypotension.</li>
      <li>Symptomatic hypotension (lightheadedness, low BP) requires immediate reduction or cessation of the infusion to prevent further hemodynamic compromise.</li>
      <li>Closely monitor BP and patient symptoms after adjusting the infusion.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient is admitted with suspected cardiac tamponade following chest trauma. The nurse assesses the vital signs and notes BP 90/70 mmHg, HR 125 bpm, RR 28/min, and significant jugular venous distension (JVD). Heart sounds are faint.",
    question: "What classic triad of signs is partially represented here, and what other specific assessment finding would help confirm cardiac tamponade?",
    answer: `<h3>ANSWER:</h3>
    <p><strong>Beck's Triad</strong> is partially represented: <strong>Hypotension</strong> (with narrowed pulse pressure - 90/70 = 20 mmHg) and <strong>Jugular Venous Distension (JVD)</strong>. <strong>Muffled/distant heart sounds</strong> (described as faint) complete the triad.</p>
    <p>Another specific assessment finding that helps confirm cardiac tamponade is <strong>Pulsus Paradoxus</strong>:</p>
    <ul>
      <li>An exaggerated drop (>10 mmHg) in systolic blood pressure during inspiration.</li>
      <li>This indicates severe restriction of ventricular filling due to pericardial pressure.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient with a mechanical aortic valve replacement is being discharged. The patient's target INR range is 2.5-3.5.",
    question: "What patient education regarding safety is paramount due to the lifelong need for warfarin therapy?",
    answer: `<h3>ANSWER:</h3>
    <p>Paramount safety education for lifelong warfarin therapy includes:</p>
    <ul>
      <li><strong>Bleeding Precautions:</strong>
        <ul>
          <li>Use a soft toothbrush and electric razor.</li>
          <li>Avoid activities with high risk of injury (e.g., contact sports).</li>
          <li>Apply firm pressure to any cuts.</li>
          <li>Be aware of medications/supplements that increase bleeding risk (NSAIDs, aspirin, some herbals) and consult provider before use.</li>
        </ul>
      </li>
      <li><strong>Recognizing and Reporting Signs of Bleeding:</strong>
        <ul>
          <li>Severe or prolonged bleeding (e.g., epistaxis, gums).</li>
          <li>Excessive bruising.</li>
          <li>Blood in urine (hematuria) or stool (melena, hematochezia).</li>
          <li>Severe headache, dizziness, or neurological changes (could indicate intracranial bleed).</li>
          <li>Seek immediate medical attention if significant bleeding occurs.</li>
        </ul>
      </li>
      <li>Importance of regular INR monitoring and adherence to prescribed dose.</li>
      <li>Wearing medical alert identification.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A nurse is analyzing an ECG strip showing a regular rhythm at a rate of 72 bpm, a P wave preceding every QRS complex, a constant PR interval of 0.24 seconds, and a QRS duration of 0.08 seconds.",
    question: "How should the nurse interpret this rhythm?",
    answer: `<h3>ANSWER:</h3>
    <p>This rhythm should be interpreted as <strong>First-Degree Atrioventricular (AV) Block</strong>.</p>
    <ul>
      <li><strong>Rate:</strong> 72 bpm (within normal sinus range).</li>
      <li><strong>Rhythm:</strong> Regular.</li>
      <li><strong>P waves:</strong> Present, one precedes each QRS.</li>
      <li><strong>PR interval:</strong> 0.24 seconds (<strong>prolonged</strong> > 0.20 seconds) and <strong>constant</strong>.</li>
      <li><strong>QRS duration:</strong> 0.08 seconds (normal).</li>
      <li>The key finding is the consistently prolonged PR interval, indicating delayed conduction through the AV node, but all impulses are conducted.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A 70-year-old post-operative patient who has been on bedrest for 3 days complains of sudden onset shortness of breath, pleuritic chest pain, and anxiety. Vital signs show HR 115 bpm, RR 28/min, BP 105/70 mmHg, SpO2 90% on room air.",
    question: "Given the patient's history and presentation, what life-threatening condition should the nurse suspect first?",
    answer: `<h3>ANSWER:</h3>
    <p>The nurse should first suspect <strong>Pulmonary Embolism (PE)</strong>.</p>
    <ul>
      <li><strong>Risk Factors:</strong> Immobility (post-operative bedrest) predisposes to Deep Vein Thrombosis (DVT), the most common source of PE.</li>
      <li><strong>Classic Symptoms:</strong> Sudden onset dyspnea, pleuritic chest pain, tachycardia, tachypnea, hypoxia, and anxiety are highly suggestive of PE.</li>
      <li>This is a medical emergency requiring immediate assessment and intervention.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient is undergoing a pharmacologic stress test using dobutamine infusion. During the infusion, the patient develops significant chest pain, ST-segment elevation on the monitor, and becomes hypotensive.",
    question: "What is the nurse's immediate priority action?",
    answer: `<h3>ANSWER:</h3>
    <p>The nurse's immediate priority action is to <strong>stop the dobutamine infusion</strong>.</p>
    <ul>
      <li>Dobutamine increases heart rate and contractility, mimicking exercise stress.</li>
      <li>The development of chest pain, ST elevation, and hypotension indicates significant myocardial ischemia possibly progressing to infarction, precipitated by the stress agent.</li>
      <li>Stopping the infusion removes the cardiac stressor and is the first step in managing this acute complication. Notify the provider immediately and follow emergency protocols.</li>
    </ul>`
  },
  {
    category: "pharmacology",
    type: "Pharmacology",
    scenario: "A nurse is caring for a patient with chronic heart failure who has prescriptions for Furosemide 40 mg IV daily and Spironolactone 25 mg PO daily.",
    question: "What specific electrolyte imbalance is the nurse primarily monitoring for with Furosemide, and what is the rationale for adding Spironolactone?",
    answer: `<h3>ANSWER:</h3>
    <p>The nurse is primarily monitoring for <strong>Hypokalemia</strong> (low potassium) with Furosemide. Spironolactone is added as a <strong>potassium-sparing diuretic</strong>.</p>
    <ul>
      <li><strong>Furosemide:</strong> A loop diuretic that inhibits sodium and chloride reabsorption in the loop of Henle, also causing significant potassium and magnesium excretion.</li>
      <li><strong>Spironolactone:</strong> An aldosterone antagonist (potassium-sparing diuretic) that works in the distal tubule to promote sodium and water excretion while conserving potassium.</li>
      <li><strong>Rationale:</strong> Spironolactone helps mitigate the potassium loss caused by furosemide, reducing the risk of hypokalemia and its associated complications (e.g., arrhythmias), and provides additional diuretic and mortality benefits in HF.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient presents with palpitations. The ECG shows an irregularly irregular rhythm at a rate of 130 bpm, no discernible P waves, and normal QRS duration. The patient is alert but anxious, BP 110/70 mmHg.",
    question: "What is the rhythm, and what is the initial priority nursing management goal?",
    answer: `<h3>ANSWER:</h3>
    <p>The rhythm is <strong>Atrial Fibrillation (AFib)</strong> with a <strong>Rapid Ventricular Response (RVR)</strong>.</p>
    <p>The initial priority nursing management goal is <strong>Ventricular Rate Control</strong>:</p>
    <ul>
      <li>Rapid ventricular rates (>100 bpm) in AFib compromise diastolic filling time, potentially reducing cardiac output and causing symptoms.</li>
      <li>Medications like beta-blockers (e.g., metoprolol), calcium channel blockers (e.g., diltiazem), or occasionally digoxin are used to slow conduction through the AV node and reduce the ventricular rate to <100 bpm.</li>
      <li>Anticoagulation assessment/initiation is also critical but rate control is the immediate hemodynamic priority if the rate is rapid.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A nurse is preparing a patient for cardiac MRI. The patient has a history of coronary artery bypass surgery 20 years ago and reports having \"metal clips\" from the surgery.",
    question: "What is the nurse's most critical action before allowing the patient to proceed with the MRI?",
    answer: `<h3>ANSWER:</h3>
    <p>The nurse's most critical action is to perform meticulous <strong>safety screening</strong> to determine if the patient has any <strong>contraindicated metallic implants</strong>.</p>
    <ul>
      <li>Older aneurysm clips or other retained metallic fragments/implants can be an absolute contraindication to MRI due to the strong magnetic field.</li>
      <li>The nurse must verify the type of clips used (if possible) or ensure thorough screening protocols are followed to confirm MRI safety. This may involve reviewing operative reports or consulting radiology/cardiology.</li>
      <li>Assume implants are unsafe unless proven otherwise. Document findings thoroughly.</li>
    </ul>`
  },
  {
    category: "pharmacology",
    type: "Pharmacology",
    scenario: "A patient admitted with unstable angina receives Morphine Sulfate 4 mg IV for persistent chest pain unrelieved by nitroglycerin.",
    question: "Besides pain relief, what are the intended therapeutic effects of morphine in this cardiac context, and what key side effects must the nurse monitor for?",
    answer: `<h3>ANSWER:</h3>
    <p>Intended therapeutic effects of morphine in unstable angina/MI:</p>
    <ul>
      <li><strong>Analgesia</strong> (pain relief).</li>
      <li><strong>Anxiolysis</strong> (reduction of anxiety).</li>
      <li><strong>Vasodilation</strong> (primarily venous), which reduces preload and myocardial oxygen demand.</li>
    </ul>
    <p>Key side effects to monitor for:</p>
    <ul>
      <li><strong>Respiratory depression</strong> (monitor respiratory rate and depth).</li>
      <li><strong>Hypotension</strong> (monitor blood pressure).</li>
      <li>Nausea/Vomiting.</li>
      <li>Bradycardia.</li>
      <li>Sedation.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient diagnosed with Deep Vein Thrombosis (DVT) in the left leg is receiving a continuous heparin infusion. The patient asks if they should stay in bed or if they can walk.",
    question: "What is the appropriate nursing instruction regarding activity for this patient once therapeutic anticoagulation is achieved?",
    answer: `<h3>ANSWER:</h3>
    <p>Once therapeutic anticoagulation (e.g., target aPTT range achieved with heparin) is established, <strong>ambulation should be encouraged</strong> as ordered.</p>
    <ul>
      <li>Historically, strict bedrest was advocated, but current evidence suggests early ambulation is safe and may help reduce pain and swelling once the patient is adequately anticoagulated.</li>
      <li>Activity helps prevent venous stasis.</li>
      <li>The nurse should ensure anticoagulation is therapeutic before encouraging ambulation and instruct the patient to report any increased pain or shortness of breath.</li>
      <li>The affected leg should be elevated when the patient is resting. Massaging the leg remains contraindicated.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient with known Mitral Stenosis presents with increasing exertional dyspnea and occasional hemoptysis. The ECG monitor shows atrial fibrillation with a ventricular rate of 115 bpm.",
    question: "What hemodynamic consequence of mitral stenosis likely contributes to these symptoms and the development of atrial fibrillation?",
    answer: `<h3>ANSWER:</h3>
    <p><strong>Increased Left Atrial (LA) pressure</strong> and <strong>LA enlargement</strong> are the key hemodynamic consequences of mitral stenosis contributing to these symptoms.</p>
    <ul>
      <li>The narrowed mitral valve obstructs blood flow from the LA to the Left Ventricle (LV).</li>
      <li>This backup of blood increases LA pressure, leading to LA dilation.</li>
      <li>Elevated LA pressure transmits backward into the pulmonary circulation, causing pulmonary congestion (dyspnea, hemoptysis).</li>
      <li>LA enlargement stretches the atrial tissue, creating a substrate for atrial fibrillation.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A nurse is caring for a patient immediately following surgical aortic valve replacement with a mechanical valve.",
    question: "Beyond standard post-operative cardiac surgery monitoring, what specific long-term complication risk must be addressed through patient education before discharge?",
    answer: `<h3>ANSWER:</h3>
    <p>The specific long-term complication risk requiring extensive patient education is <strong>thromboembolism</strong>, necessitating <strong>lifelong anticoagulation with warfarin</strong>.</p>
    <p><strong>Essential Education Points:</strong></p>
    <ul>
      <li>Mandatory lifelong warfarin therapy (DOACs contraindicated).</li>
      <li>Need for regular INR monitoring and maintaining therapeutic range (e.g., 2.5-3.5).</li>
      <li>Bleeding precautions and recognition of bleeding signs.</li>
      <li>Consistent dietary Vitamin K intake.</li>
      <li>Need for Infective Endocarditis (IE) prophylaxis before certain procedures.</li>
      <li>Importance of medical alert identification.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "An ECG strip shows P waves occurring regularly at a rate of 80 bpm. QRS complexes are wide (>0.12 sec), occur regularly at a rate of 38 bpm, and bear no consistent relationship to the P waves (AV dissociation). The patient is lethargic with BP 80/45 mmHg.",
    question: "Identify this rhythm and state the priority nursing intervention.",
    answer: `<h3>ANSWER:</h3>
    <p>The rhythm is <strong>Third-Degree Atrioventricular (AV) Block (Complete Heart Block)</strong> with a ventricular escape rhythm, causing symptomatic bradycardia and hemodynamic instability.</p>
    <p><strong>Priority Nursing Intervention:</strong></p>
    <ul>
      <li>Initiate <strong>Transcutaneous Pacing (TCP)</strong> immediately.</li>
      <li>Complete heart block with wide QRS escape and hemodynamic compromise requires urgent pacing to increase ventricular rate and cardiac output.</li>
      <li>While preparing for TCP, ensure IV access and prepare for potential administration of dopamine or epinephrine infusion if pacing is delayed or ineffective. Atropine is unlikely to be effective.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient with a history of heart failure is admitted with cardiogenic shock following a large anterior MI. The patient is hypotensive (BP 75/50), tachycardic (HR 120), has cool, clammy skin, and decreased urine output (<30 mL/hr).",
    question: "What is the primary pathophysiological problem in cardiogenic shock, and what is the immediate goal of nursing management?",
    answer: `<h3>ANSWER:</h3>
    <p>The primary pathophysiological problem in cardiogenic shock is severe <strong>cardiac pump failure</strong>, leading to drastically reduced cardiac output and inadequate tissue perfusion despite adequate intravascular volume.</p>
    <p><strong>Immediate Goal of Nursing Management:</strong></p>
    <ul>
      <li>Recognize signs of hypotension + hypoperfusion and notify provider/activate rapid response.</li>
      <li>Stabilize the patient by supporting airway, breathing, and circulation (ABCs).</li>
      <li>Administer oxygen.</li>
      <li>Establish IV access.</li>
      <li>Prepare for interventions aimed at improving cardiac output and perfusion, such as cautious fluid administration (if no overload), vasopressor/inotrope infusions (e.g., norepinephrine, dobutamine), and potential mechanical circulatory support or urgent reperfusion therapy (PCI).</li>
      <li>Continuous, close monitoring is essential.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A nurse is assessing a patient with suspected Abdominal Aortic Aneurysm (AAA). During palpation of the abdomen, the nurse feels a prominent pulsating mass midline.",
    question: "What should the nurse do immediately after discovering this finding?",
    answer: `<h3>ANSWER:</h3>
    <p>The nurse should <strong>stop palpating the mass immediately</strong> and notify the healthcare provider of the finding.</p>
    <ul>
      <li>Palpation of a known or suspected AAA should be avoided or performed with extreme caution.</li>
      <li>Vigorous palpation could theoretically increase the risk of aneurysm rupture, especially if the aneurysm is large or tender.</li>
      <li>The presence of a pulsatile abdominal mass is a significant finding that requires further diagnostic evaluation (e.g., ultrasound, CT scan).</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient who underwent Percutaneous Coronary Intervention (PCI) with drug-eluting stent placement 3 months ago calls the clinic stating they stopped taking their clopidogrel a week ago because they \"felt fine\" and ran out of pills.",
    question: "What is the most significant risk associated with the premature discontinuation of clopidogrel (or other P2Y12 inhibitors) after stent placement?",
    answer: `<h3>ANSWER:</h3>
    <p>The most significant risk is <strong>Stent Thrombosis</strong>.</p>
    <ul>
      <li>Dual Antiplatelet Therapy (DAPT - aspirin plus a P2Y12 inhibitor like clopidogrel) is critical after stent placement, especially with drug-eluting stents, to prevent platelets from adhering to the stent struts and forming a clot.</li>
      <li>Stent thrombosis is often a catastrophic event, frequently resulting in acute myocardial infarction or sudden cardiac death.</li>
      <li>Strict adherence to DAPT for the prescribed duration (often 6-12 months or longer) is essential patient education.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient is undergoing elective synchronized cardioversion for stable atrial flutter. The defibrillator has been placed in synchronized mode, pads are applied, and the patient has received sedation.",
    question: "What critical safety check must the nurse perform immediately before discharging the energy?",
    answer: `<h3>ANSWER:</h3>
    <p>The critical safety check is to ensure "<strong>All Clear!</strong>" before discharging the energy.</p>
    <ul>
      <li>This involves visually confirming that no personnel are touching the patient, the bed, or any equipment connected to the patient.</li>
      <li>The person operating the defibrillator typically announces "Charging," then "Clear!" (or similar) while performing the visual check, before pressing the shock buttons.</li>
      <li>This prevents accidental electrical injury to staff members.</li>
      <li>Also visually confirm synchronization markers are present on the R waves.</li>
    </ul>`
  },
  {
    category: "assessment",
    type: "Nursing Assessment & Vital Signs",
    scenario: "A patient with right-sided heart failure is being assessed. The nurse is evaluating for Jugular Venous Distention (JVD).",
    question: "What is the proper technique for assessing JVD?",
    answer: `<h3>ANSWER:</h3>
    <p>Proper technique for assessing Jugular Venous Distention (JVD):</p>
    <ul>
      <li>Position the patient supine with the head of the bed elevated to <strong>30-45 degrees</strong>.</li>
      <li>Have the patient turn their head slightly away from the side being examined.</li>
      <li>Use tangential lighting (light source directed across the neck) to better visualize pulsations.</li>
      <li>Identify the highest point of pulsation of the internal jugular vein (look for the double waveform pulsation, distinct from the carotid pulse).</li>
      <li>Measure the vertical distance (in centimeters) between the highest point of pulsation and the <strong>sternal angle (Angle of Louis)</strong>.</li>
      <li>Normal JVD is typically ≤ 3-4 cm above the sternal angle at 45 degrees. Increased JVD suggests elevated central venous pressure, often seen in right-sided HF.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient's ECG shows wide QRS complexes (>0.12 sec) occurring early, followed by a compensatory pause. The morphology of these early beats varies.",
    question: "How should the nurse describe these ectopic beats?",
    answer: `<h3>ANSWER:</h3>
    <p>These ectopic beats should be described as <strong>Multifocal Premature Ventricular Contractions (PVCs)</strong>.</p>
    <ul>
      <li><strong>Premature:</strong> Occur earlier than the next expected sinus beat.</li>
      <li><strong>Ventricular:</strong> Originate in the ventricle, resulting in a wide, bizarre QRS complex with no preceding P wave.</li>
      <li><strong>Multifocal:</strong> The varying morphology indicates they originate from different ectopic sites within the ventricles.</li>
      <li><strong>Significance:</strong> Multifocal PVCs are generally considered more concerning than unifocal PVCs, especially in patients with structural heart disease, as they may indicate greater ventricular irritability and increased risk for sustained ventricular arrhythmias.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient is admitted for treatment of Infective Endocarditis (IE) involving the mitral valve. The patient has a peripherally inserted central catheter (PICC) line for long-term IV antibiotic administration.",
    question: "What are the priority nursing interventions related to the management of IE?",
    answer: `<h3>ANSWER:</h3>
    <p>Priority nursing interventions for Infective Endocarditis (IE):</p>
    <ol>
      <li><strong>Administer IV antibiotics:</strong> Ensure timely administration of the prescribed long-term (typically 4-6 weeks) antibiotic regimen via the central line.</li>
      <li><strong>Monitor for effectiveness & toxicity:</strong> Assess for resolution of fever, improving inflammatory markers, and monitor for antibiotic side effects/toxicity (e.g., renal function, ototoxicity).</li>
      <li><strong>Assess for complications:</strong> Frequently monitor for signs of heart failure (worsening valve function) and systemic/pulmonary embolization (stroke symptoms, limb ischemia, flank pain, respiratory changes).</li>
      <li><strong>PICC line care:</strong> Provide meticulous care to the PICC site to prevent secondary infection.</li>
      <li><strong>Patient education:</strong> Teach about the long antibiotic course, need for follow-up, signs of relapse/complications, meticulous oral hygiene, and the critical need for future IE prophylaxis.</li>
      <li><strong>Activity/Rest:</strong> Maintain rest during acute phase, gradually increase activity.</li>
    </ol>`
  },
  {
    category: "pharmacology",
    type: "Pharmacology",
    scenario: "A nurse is educating a patient about using sublingual nitroglycerin (NTG) for stable angina episodes.",
    question: "What key instructions should the nurse provide regarding the administration and storage of sublingual NTG?",
    answer: `<h3>ANSWER:</h3>
    <p>Key instructions for sublingual nitroglycerin (NTG) use:</p>
    <p><strong>Administration:</strong></p>
    <ul>
      <li><strong>Sit down</strong> before taking NTG to avoid dizziness/fainting from potential hypotension.</li>
      <li>Place one tablet under the tongue at the onset of chest pain; <strong>do not swallow</strong>. Allow it to dissolve.</li>
      <li>If pain is not relieved in 5 minutes, <strong>call 911</strong>.</li>
      <li>May take up to 3 tablets, 5 minutes apart, while awaiting emergency medical services (EMS) if pain persists.</li>
      <li>Monitor blood pressure if possible; do not take if systolic BP is < 90-100 mmHg (or per provider).</li>
    </ul>
    <p><strong>Storage:</strong></p>
    <ul>
      <li>Keep NTG in its <strong>original dark, glass container</strong>, tightly sealed.</li>
      <li>Store at room temperature, away from heat, light, and moisture.</li>
      <li>Replace the supply every <strong>6 months</strong> (or per expiration date), as it loses potency.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "An ECG strip shows an atrial rate of approximately 300 bpm with a characteristic \"sawtooth\" pattern. The ventricular rhythm is regular at 150 bpm. QRS duration is normal.",
    question: "Identify this rhythm and explain the likely AV conduction ratio.",
    answer: `<h3>ANSWER:</h3>
    <p>The rhythm is <strong>Atrial Flutter</strong>.</p>
    <ul>
      <li>The characteristic "<strong>sawtooth</strong>" flutter waves at a rate of ~300 bpm indicate atrial flutter.</li>
      <li>The regular ventricular rate of 150 bpm suggests a consistent <strong>2:1 Atrioventricular (AV) conduction ratio</strong>.</li>
      <li>This means that for every two flutter waves generated by the atria, one impulse is conducted through the AV node to the ventricles, resulting in a ventricular rate exactly half the atrial rate (300 / 2 = 150).</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient with severe heart failure has an order for fluid restriction of 1.5 liters per day. The patient expresses frustration about feeling thirsty.",
    question: "What nursing interventions can help manage thirst and promote adherence to the fluid restriction?",
    answer: `<h3>ANSWER:</h3>
    <p>Nursing interventions to manage thirst and promote fluid restriction adherence:</p>
    <ul>
      <li>Offer frequent <strong>oral hygiene</strong> (brushing teeth, mouth swabs, rinsing mouth without swallowing).</li>
      <li>Provide <strong>sugar-free hard candy or chewing gum</strong> to stimulate saliva.</li>
      <li>Offer <strong>ice chips</strong> (count as fluid intake, often half the volume).</li>
      <li>Serve allowed fluids in <strong>small glasses or cups</strong> to make amounts seem larger.</li>
      <li><strong>Space fluid intake</strong> throughout the day; avoid consuming large amounts at once.</li>
      <li>Moisten lips with lip balm.</li>
      <li>Avoid salty or dry foods that can increase thirst.</li>
      <li>Educate the patient on the rationale for the restriction and involve them in tracking intake.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient returns from cardiac catheterization via the femoral artery with a vascular closure device in place. The post-procedure orders specify bedrest for 4 hours with the head of the bed (HOB) no higher than 30 degrees.",
    question: "What is the primary rationale for keeping the HOB ≤ 30 degrees and the affected leg straight during this period?",
    answer: `<h3>ANSWER:</h3>
    <p>The primary rationale is to <strong>prevent bleeding and hematoma formation</strong> at the femoral artery access site.</p>
    <ul>
      <li>Keeping the affected leg <strong>straight</strong> prevents kinking or disruption of the artery at the puncture site.</li>
      <li>Limiting HOB elevation (≤ 30 degrees) reduces flexion at the hip, which <strong>decreases pressure and tension</strong> on the femoral artery and the closure device/puncture site.</li>
      <li>These measures help promote hemostasis and reduce the risk of access site complications like bleeding, hematoma, or pseudoaneurysm formation.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient with a history of hypertension and dyslipidemia reports chest tightness that occurs predictably when mowing the lawn and resolves within 5 minutes of stopping the activity. He denies pain at rest.",
    question: "Based on this description, what type of angina is the patient likely experiencing, and what is the underlying pathophysiology?",
    answer: `<h3>ANSWER:</h3>
    <p>The patient is likely experiencing <strong>Stable Angina</strong>.</p>
    <p><strong>Underlying Pathophysiology:</strong></p>
    <ul>
      <li>Stable angina is caused by transient, reversible myocardial ischemia due to a <strong>fixed atherosclerotic plaque</strong> narrowing a coronary artery.</li>
      <li>During exertion (like mowing the lawn), myocardial oxygen demand increases.</li>
      <li>The narrowed artery cannot supply enough oxygenated blood to meet the increased demand, causing ischemic chest discomfort.</li>
      <li>The discomfort resolves when the activity stops because oxygen demand decreases, restoring the balance between supply and demand.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient is admitted with acute myocarditis. The nurse notes the patient's heart rate is 110 bpm, even while resting, and the patient has a low-grade fever.",
    question: "What is a critical nursing consideration regarding activity for a patient with acute myocarditis?",
    answer: `<h3>ANSWER:</h3>
    <p>A critical nursing consideration is enforcing <strong>activity restrictions</strong> during the acute phase.</p>
    <ul>
      <li>Myocarditis involves inflammation of the heart muscle, leading to myocardial damage and dysfunction.</li>
      <li>Physical activity increases cardiac workload and oxygen demand, which can worsen myocardial inflammation and damage, potentially leading to arrhythmias, worsening heart failure, or sudden death.</li>
      <li><strong>Strict rest</strong> or significantly limited activity is typically recommended until inflammation subsides (guided by symptoms, biomarkers, and echocardiographic findings) to allow the heart muscle to heal. Gradual return to activity is essential.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient with newly diagnosed atrial fibrillation asks the nurse why anticoagulation therapy is necessary, stating, \"I don't feel anything wrong.\"",
    question: "How should the nurse explain the primary rationale for anticoagulation in atrial fibrillation?",
    answer: `<h3>ANSWER:</h3>
    <p>The nurse should explain that anticoagulation is necessary to <strong>prevent stroke</strong>.</p>
    <ul>
      <li>In atrial fibrillation, the atria (upper heart chambers) quiver instead of contracting effectively.</li>
      <li>This allows blood to pool and become stagnant, particularly in a small pouch called the left atrial appendage.</li>
      <li>Stagnant blood is prone to forming clots (thrombi).</li>
      <li>If a clot breaks loose, it can travel through the bloodstream to the brain, blocking blood flow and causing a stroke.</li>
      <li>Anticoagulants ("blood thinners") help prevent these clots from forming, significantly reducing the risk of stroke, even if the patient is asymptomatic from the AFib itself.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient who had an MI 4 days ago complains of sharp chest pain that is worse on inspiration and relieved by sitting forward. Auscultation reveals a friction rub. VS: T 38.0 C, HR 98, BP 120/76, RR 20.",
    question: "What post-MI complication is suspected, and what potential life-threatening condition must the nurse monitor for closely?",
    answer: `<h3>ANSWER:</h3>
    <p><strong>Post-myocardial infarction pericarditis</strong> (Dressler's syndrome if > 1 week post-MI, but acute pericarditis common earlier) is suspected based on the pleuritic chest pain improved by leaning forward and the presence of a pericardial friction rub.</p>
    <p>The potential life-threatening condition to monitor for closely is <strong>Cardiac Tamponade</strong>:</p>
    <ul>
      <li>Inflammation from pericarditis can lead to pericardial effusion (fluid accumulation in the pericardial sac).</li>
      <li>If fluid accumulates rapidly or excessively, it can compress the heart, restrict diastolic filling, and drastically reduce cardiac output, leading to tamponade.</li>
      <li>Monitor for hypotension, JVD, muffled heart sounds, pulsus paradoxus, tachycardia, and dyspnea.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A nurse is teaching a patient about Holter monitoring. The patient asks, \"What do I need to write down in the diary?\"",
    question: "What specific information is essential for the patient to record in their Holter monitor diary?",
    answer: `<h3>ANSWER:</h3>
    <p>Essential information to record in the Holter monitor diary includes:</p>
    <ul>
      <li><strong>Time of any symptoms experienced</strong> (e.g., palpitations, dizziness, lightheadedness, chest pain, shortness of breath, fainting).</li>
      <li><strong>Description of the symptoms</strong>.</li>
      <li><strong>Specific activities performed</strong> at the time symptoms occurred or during significant events (e.g., exercise, emotional stress, resting).</li>
      <li>Time medications were taken.</li>
      <li>Times of sleep and waking.</li>
      <li>This diary is crucial for correlating the patient's subjective experience with the objective ECG findings recorded by the monitor.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient with severe Aortic Regurgitation (AR) is being monitored. Physical assessment reveals a blood pressure of 150/50 mmHg.",
    question: "What characteristic finding related to pulse pressure does this BP reading represent, and what causes it in AR?",
    answer: `<h3>ANSWER:</h3>
    <p>This BP reading represents a <strong>Widened Pulse Pressure</strong> (Systolic BP - Diastolic BP = 150 - 50 = 100 mmHg).</p>
    <p><strong>Cause in Aortic Regurgitation (AR):</strong></p>
    <ul>
      <li>During systole, the left ventricle ejects a large stroke volume (including the regurgitant volume from the previous beat) leading to a high systolic pressure.</li>
      <li>During diastole, the incompetent aortic valve allows a significant amount of blood to leak back (regurgitate) from the aorta into the left ventricle.</li>
      <li>This diastolic backflow causes a rapid drop in aortic pressure, resulting in a low diastolic pressure.</li>
      <li>The combination of high systolic and low diastolic pressure creates the characteristic widened pulse pressure seen in significant AR.</li>
    </ul>`
  },
  {
    category: "pharmacology",
    type: "Pharmacology",
    scenario: "A patient is receiving a continuous infusion of heparin for DVT. The most recent aPTT result is 150 seconds (therapeutic range typically 60-90 seconds). The nurse observes oozing from the IV site and new bruising on the patient's arm.",
    question: "What are the nurse's priority actions?",
    answer: `<h3>ANSWER:</h3>
    <p>Priority nursing actions for supratherapeutic aPTT with signs of bleeding:</p>
    <ol>
      <li><strong>Stop the heparin infusion immediately.</strong></li>
      <li>Notify the healthcare provider of the critical lab value and signs of bleeding.</li>
      <li>Perform a thorough assessment for any other signs of bleeding (hematuria, melena, neurological changes, flank pain).</li>
      <li>Monitor vital signs closely for hemodynamic instability.</li>
      <li>Anticipate orders for potential administration of <strong>protamine sulfate</strong> (heparin antidote) if bleeding is significant.</li>
      <li>Apply pressure to any active bleeding sites (like the IV site).</li>
    </ol>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient presents to the ED with chest pain. Initial cardiac troponin I level drawn 1 hour after symptom onset is 0.03 ng/mL (Reference range < 0.04 ng/mL).",
    question: "Based on this single troponin result, can the nurse confidently rule out an acute myocardial infarction (AMI)? Why or why not?",
    answer: `<h3>ANSWER:</h3>
    <p><strong>No</strong>, the nurse cannot confidently rule out an AMI based on this single early troponin result.</p>
    <p><strong>Rationale:</strong></p>
    <ul>
      <li>Cardiac troponin levels typically begin to rise within <strong>3-4 hours</strong> after the onset of myocardial injury.</li>
      <li>A single negative result obtained very early (1 hour) after symptom onset does not exclude AMI, as the level may not yet have risen above the detection threshold.</li>
      <li><strong>Serial measurements</strong> (e.g., at 3-6 hours after onset) are crucial to observe for the characteristic rise and/or fall pattern that confirms acute myocardial injury. Clinical correlation with symptoms and ECG findings is essential.</li>
    </ul>`
  },
  {
    category: "cardiovascular",
    type: "Cardiovascular System",
    scenario: "A patient with a newly implanted permanent pacemaker reports experiencing rhythmic hiccups that are persistent and bothersome since the procedure.",
    question: "What potential pacemaker complication should the nurse suspect?",
    answer: `<h3>ANSWER:</h3>
    <p>The nurse should suspect <strong>diaphragmatic pacing</strong>.</p>
    <ul>
      <li>This complication can occur if the ventricular pacemaker lead is positioned near or perforates the ventricular wall close to the phrenic nerve.</li>
      <li>Electrical stimulation from the pacemaker captures the phrenic nerve, causing stimulation of the diaphragm and resulting in rhythmic hiccups synchronized with the pacing rate.</li>
      <li>This requires prompt notification of the provider and likely requires lead repositioning.</li>
    </ul>`
  },
  {
    category: "pharmacology",
    type: "Pharmacology",
    scenario: "A patient presents with unstable angina. The provider orders Aspirin 325 mg PO once. The patient has enteric-coated aspirin available.",
    question: "What instruction should the nurse give the patient regarding taking the aspirin for maximum rapid effect in this acute setting?",
    answer: `<h3>ANSWER:</h3>
    <p>The nurse should instruct the patient to <strong>chew</strong> the aspirin tablet(s).</p>
    <ul>
      <li>In the setting of suspected Acute Coronary Syndrome (ACS), rapid inhibition of platelet aggregation is desired.</li>
      <li>Chewing non-enteric-coated aspirin (or crushing enteric-coated if non-enteric is unavailable, though less ideal) leads to faster absorption through the oral mucosa compared to swallowing it whole, especially enteric-coated forms which are designed for delayed release.</li>
      <li>The initial dose is typically 162-325 mg.</li>
    </ul>`
  },
  {
    category: "pharmacology",
    type: "Pharmacology",
    scenario: "A patient is scheduled for an exercise stress test. The patient takes Metoprolol daily for hypertension.",
    question: "What instruction regarding the Metoprolol should the nurse anticipate the provider might give the patient before the stress test?",
    answer: `<h3>ANSWER:</h3>
    <p>The nurse should anticipate the provider might instruct the patient to <strong>hold the Metoprolol dose</strong> on the morning of the test (or for 24-48 hours prior).</p>
    <ul>
      <li>Beta-blockers like Metoprolol lower heart rate and blood pressure, blunting the cardiovascular response to exercise.</li>
      <li>Holding the medication allows the patient to achieve a higher heart rate during the test, increasing the sensitivity of the test for detecting exercise-induced myocardial ischemia.</li>
      <li>Patients should always confirm specific instructions about holding medications with their provider, as protocols vary.</li>
    </ul>`
  }
];
