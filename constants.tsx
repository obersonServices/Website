import { 
  ShieldAlert, 
  Users, 
  FileText, 
  CheckCircle, 
  Fish, 
  ScanEye, 
  Cloud, 
  Activity 
} from 'lucide-react';
import { Service, Exercise } from './types';

export const SERVICES: Service[] = [
  {
    id: 'soc',
    title: 'Managed Security Operations (SOC)',
    description: '24/7 real-time threat monitoring, detection, and incident response powered by advanced SIEM analytics.',
    fullDescription: 'Our Managed SOC acts as your always-on defensive shield. Utilizing state-of-the-art SIEM technology and human expertise, we ingest logs from your entire infrastructure to detect anomalies before they become breaches. Our analysts investigate alerts 24/7/365 to ensure your business never sleeps unprotected.',
    icon: ShieldAlert,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    priority: 1,
    features: [
      '24/7/365 Real-Time Monitoring',
      'Advanced Threat Intelligence Feeds',
      'Automated Incident Triage',
      'Forensic Log Retention',
      'Regular Threat Hunting'
    ],
    benefits: [
      'Reduce Mean Time to Detect (MTTD)',
      'Minimize operational downtime',
      'Satisfy regulatory monitoring requirements',
      'Eliminate the cost of building an internal SOC'
    ],
    whoIsItFor: ['Enterprises with 24/7 uptime needs', 'Regulated industries (Finance, Healthcare)', 'Organizations with limited internal security staff']
  },
  {
    id: 'workshops',
    title: 'Cybersecurity Workshops & Exercises',
    description: 'Interactive training and simulation exercises designed to test your resilience and team readiness.',
    fullDescription: 'We move beyond theory into practice. Our workshops and exercises are derived from military-grade playbooks to stress-test your people, processes, and technology. From C-suite tabletops to full-technical Red Team assaults, we validate your readiness.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80',
    priority: 2,
    features: [
      'Custom Scenario Development (MSEL)',
      'Executive Tabletop Exercises',
      'Red vs Blue Team Drills',
      'After Action Reporting (AAR)',
      'Gap Analysis & Remediation Roadmaps'
    ],
    benefits: [
      'Validate Incident Response Plans',
      'Improve inter-departmental communication',
      'Identify "silent" process failures',
      'Build muscle memory for real crises'
    ],
    whoIsItFor: ['Board & C-Suite', 'Incident Response Teams', 'IT Operations Staff']
  },
  {
    id: 'policy',
    title: 'Policy Setup & Consultancy',
    description: 'Strategic security governance, policy development, and vCISO services tailored to your business goals.',
    fullDescription: 'Security starts with governance. We help you build the "Paper Shield" that guides your technical controls. Our vCISO services provide high-level strategic direction without the cost of a full-time executive, ensuring your security strategy aligns with business objectives.',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    priority: 3,
    features: [
      'Security Roadmap Development',
      'Policy Creation & Lifecycle Management',
      'Vendor Risk Management',
      'Virtual CISO (vCISO) Retainer',
      'Business Continuity Planning (BCP)'
    ],
    benefits: [
      'Clear strategic direction',
      'Aligned security and business goals',
      'Reduced vendor-related risk',
      'Defensible security posture'
    ],
    whoIsItFor: ['Startups needing security leadership', 'Organizations maturing their GRC function']
  },
  {
    id: 'compliance',
    title: 'Compliance & Gap Analysis',
    description: 'Guidance for ISO 27001, NIST CSF, PCI DSS, SOC 2, HIPAA, and GDPR certification readiness.',
    fullDescription: 'Navigating the alphabet soup of compliance frameworks is complex. We simplify the journey. Whether you are seeking your first SOC 2 attestation or maintaining ISO 27001 certification, our experts perform deep-dive gap analyses and guide you to audit readiness.',
    icon: CheckCircle,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80',
    priority: 4,
    features: [
      'Readiness Assessments (Mock Audits)',
      'Detailed Gap Analysis Reports',
      'Control Implementation Guidance',
      'Audit Defense Support',
      'Continuous Compliance Monitoring'
    ],
    benefits: [
      'Avoid regulatory fines',
      'Unlock sales to enterprise customers',
      'Streamline audit processes',
      'Demonstrate trust to stakeholders'
    ],
    whoIsItFor: ['SaaS providers', 'Healthcare organizations', 'Merchants handling credit card data']
  },
  {
    id: 'phishing',
    title: 'Phishing & Awareness Training',
    description: 'Employee education programs and simulated phishing campaigns to harden your human firewall.',
    fullDescription: 'Humans are often the weakest link. Our comprehensive awareness programs combine engaging training modules with ruthless simulated phishing campaigns to condition your workforce to spot and report threats.',
    icon: Fish,
    image: 'https://images.unsplash.com/photo-1614064641938-3e858a915f32?auto=format&fit=crop&q=80',
    priority: 5,
    features: [
      'Customized Spear-Phishing Campaigns',
      'Interactive LMS Modules',
      'Click-Rate Reporting & Analytics',
      'Social Engineering Sims (Vishing/Smishing)'
    ],
    benefits: [
      'Reduce successful malware infections',
      'Foster a security-conscious culture',
      'Meet compliance training requirements',
      'Turn employees into sensors'
    ],
    whoIsItFor: ['All organizations', 'High-turnover workforces']
  },
  {
    id: 'vuln-mgmt',
    title: 'Vulnerability Management',
    description: 'Continuous scanning and remediation prioritization to reduce your attack surface.',
    fullDescription: 'New vulnerabilities are discovered daily. Our service provides continuous visibility into your weaknesses. We don’t just hand you a scan report; we help prioritize remediation based on real-world risk and exploitability.',
    icon: ScanEye,
    image: 'https://images.unsplash.com/photo-1563206767-5b1d97299337?auto=format&fit=crop&q=80',
    priority: 6,
    features: [
      'Continuous Asset Discovery',
      'Risk-Based Patch Prioritization',
      'Authenticated & Unauthenticated Scanning',
      'Penetration Testing Coordination'
    ],
    benefits: [
      'Shrink the attack surface',
      'Prevent exploitation of known bugs',
      'Visibility into "Shadow IT"',
      'Data-driven security hardening'
    ],
    whoIsItFor: ['Organizations with complex IT estates', 'Software development houses']
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure Security',
    description: 'Securing cloud-native environments (AWS, Azure, GCP) and on-premise infrastructure.',
    fullDescription: 'The cloud moves fast, and misconfigurations are common. We secure your cloud footprint using best practices (CSPM) and secure your on-premise backbone, ensuring a consistent security posture across hybrid environments.',
    icon: Cloud,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80',
    priority: 7,
    features: [
      'Cloud Configuration Reviews (AWS/Azure/GCP)',
      'Container & Kubernetes Security',
      'IAM Hardening & Least Privilege',
      'Zero Trust Architecture Design'
    ],
    benefits: [
      'Secure digital transformation',
      'Prevent cloud data leaks',
      'Manage hybrid complexity',
      'Automated security guardrails'
    ],
    whoIsItFor: ['Cloud-native companies', 'Hybrid enterprises']
  },
  {
    id: 'siem',
    title: 'SIEM & Log Monitoring',
    description: 'Centralized log management and correlation to detect subtle indicators of compromise.',
    fullDescription: 'Logs are the source of truth. We implement and tune SIEM solutions to aggregate data from endpoints, networks, and cloud services, applying correlation rules to find the "needle in the haystack."',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    priority: 8,
    features: [
      'Log Aggregation & Normalization',
      'Custom Correlation Rule Logic',
      'Compliance Reporting Dashboards',
      'Long-term Data Retention'
    ],
    benefits: [
      'Centralized visibility',
      'Faster root cause analysis',
      'Satisfy audit log retention rules',
      'Context-aware alerting'
    ],
    whoIsItFor: ['Organizations with diverse IT assets', 'Compliance-driven entities']
  }
];

export const EXERCISES: Exercise[] = [
  {
    id: 'tabletop',
    title: 'Cyber Tabletop Exercise (TTX)',
    shortDescription: 'Discussion-based sessions to walk through roles and responses during a crisis.',
    fullDescription: 'Our Tabletop Exercises are facilitator-led sessions where team members review their roles during a simulated cyber incident. We utilize the Oberon Playbook to inject realistic scenario updates, forcing participants to make critical decisions without the pressure of a live system outage. This "crawl" phase helps establish baselines.',
    objectives: [
      'Validate existing Incident Response Plans (IRP)',
      'Clarify roles and responsibilities',
      'Identify communication gaps between IT and Management',
      'Familiarize executive leadership with cyber terminology'
    ],
    participants: ['C-Suite Executives', 'Legal & PR', 'IT Leadership', 'Security Managers'],
    format: 'Tabletop',
    duration: '2 - 4 Hours',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80',
    methodology: [
      { step: 'Concept Development', description: 'Define objectives and high-level scenario logic.' },
      { step: 'MSEL Creation', description: 'Scripting hypothetical injects to spark discussion.' },
      { step: 'Execution', description: 'Facilitated roundtable discussion using paper injects.' },
      { step: 'Hotwash', description: 'Immediate debrief on what worked and what failed.' }
    ],
    businessValue: [
      'Low cost, high value process validation',
      'Aligns business and technical expectations',
      'No disruption to operational systems'
    ]
  },
  {
    id: 'ransomware',
    title: 'Ransomware Readiness Simulation',
    shortDescription: 'A specific scenario focused on the encryption, extortion, and recovery phases of ransomware.',
    fullDescription: 'This exercise simulates a multi-stage ransomware attack. Starting from initial infection vector identification to the critical "to pay or not to pay" decision. We stress-test your backup recovery procedures, legal obligations regarding data privacy notifications, and crisis communications.',
    objectives: [
      'Test decision-making frameworks for extortion demands',
      'Validate backup integrity and recovery time objectives (RTO)',
      'Practice external communication and legal reporting',
      'Review cyber insurance applicability'
    ],
    participants: ['Crisis Management Team', 'IT Operations', 'Legal Counsel'],
    format: 'Tabletop / Functional Hybrid',
    duration: '4 Hours',
    image: 'https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&q=80',
    methodology: [
      { step: 'Initial Planning', description: 'Identify specific ransomware TTPs to emulate.' },
      { step: 'Mid-Term Planning', description: 'Prepare simulated ransom notes and encrypted file artifacts.' },
      { step: 'Execution', description: 'Injecting "evidence" of encryption and extortion demands.' },
      { step: 'Reporting', description: 'Analyzing the decision tree used during the crisis.' }
    ],
    businessValue: [
      'Prepares leadership for high-pressure extortion decisions',
      'Validates the efficacy of backup strategies',
      'Clarifies legal and insurance stance'
    ]
  },
  {
    id: 'incident-response',
    title: 'Incident Response (IR) Drill',
    shortDescription: 'Technical drill focusing on detection, containment, and eradication.',
    fullDescription: 'A technical, hands-on drill designed for your SOC and System Administrators. We simulate indicators of compromise (IoCs) within a controlled environment to measure the "Mean Time to Detect" (MTTD) and "Mean Time to Respond" (MTTR). This "walk" phase uses limited live injects.',
    objectives: [
      'Assess tool efficacy (SIEM, EDR, Firewall)',
      'Practice containment strategies (network isolation)',
      'Validate forensic evidence preservation',
      'Identify blind spots in network visibility'
    ],
    participants: ['SOC Analysts', 'Network Engineers', 'System Administrators'],
    format: 'Functional Drill',
    duration: '1 Day',
    image: 'https://images.unsplash.com/photo-1558494949-efc02570fbc9?auto=format&fit=crop&q=80',
    methodology: [
      { step: 'Scenario Design', description: 'Selecting specific technical IoCs (e.g., beaconing malware).' },
      { step: 'Technical Setup', description: 'Configuring the range or isolated subnet.' },
      { step: 'Drill Execution', description: 'Launching real but contained malware samples or scripts.' },
      { step: 'Analysis', description: 'Reviewing logs to see if the team detected the activity.' }
    ],
    businessValue: [
      'Metrics-driven assessment of SOC performance',
      'Identifies tool misconfigurations',
      'Improves technical response speed'
    ]
  },
  {
    id: 'phishing-sim',
    title: 'Spear Phishing & Social Engineering',
    shortDescription: 'Testing the human element through targeted email and phone campaigns.',
    fullDescription: 'Going beyond automated tools, our Red Team crafts specific spear-phishing campaigns targeting high-value personnel. This exercise tests the effectiveness of your security awareness training and the reporting procedures for suspicious communications.',
    objectives: [
      'Measure click rates and reporting rates',
      'Test credential harvesting resilience',
      'Evaluate helpdesk verification procedures',
      'Reinforce security culture'
    ],
    participants: ['All Employees', 'Specific Departments (HR, Finance)'],
    format: 'Full-Scale Simulation',
    duration: '1 - 2 Weeks',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
    methodology: [
      { step: 'Reconnaissance', description: 'Gathering OSINT to craft believable emails.' },
      { step: 'Campaign Launch', description: 'Sending benign payload emails to targets.' },
      { step: 'Data Collection', description: 'Tracking clicks, opens, and reported emails.' },
      { step: 'Teachable Moment', description: 'Immediate feedback to users who clicked.' }
    ],
    businessValue: [
      'Hardens the "human firewall"',
      'Provides tangible risk metrics for HR and Risk teams',
      'Reduces likelihood of successful credential theft'
    ]
  },
  {
    id: 'crisis-management',
    title: 'Crisis Management & Executive Decisions',
    shortDescription: 'High-level strategic exercise for the Board and C-Suite.',
    fullDescription: 'Focuses purely on the business impact of a cyber event. Scenarios include stock price impact, public reputation damage, and regulatory fines. This is a non-technical exercise designed to align business continuity planning with cyber risk.',
    objectives: [
      'Align business continuity plans (BCP) with cyber scenarios',
      'Practice public statement drafting and press handling',
      'Determine regulatory reporting timelines',
      'Manage stakeholder expectations'
    ],
    participants: ['Board of Directors', 'C-Suite', 'Public Relations'],
    format: 'Tabletop',
    duration: '3 Hours',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80',
    methodology: [
      { step: 'Scenario Mapping', description: 'Mapping cyber events to business KPIs.' },
      { step: 'Inject Delivery', description: 'News updates, stock ticker drops, regulator calls.' },
      { step: 'Decision Analysis', description: 'Evaluating strategic choices made by the Board.' },
      { step: 'Governance Review', description: 'Updating BCP/DR policies based on findings.' }
    ],
    businessValue: [
      'Protects brand reputation during crisis',
      'Ensures regulatory compliance at the highest level',
      'Unifies executive communication strategy'
    ]
  },
  {
    id: 'blue-team',
    title: 'SOC / Blue Team Readiness',
    shortDescription: 'Intensive defense simulation against active adversaries.',
    fullDescription: 'Our Red Team acts as an adversary inside a replica of your network. Your Blue Team (defenders) must detect, block, and expel the intruders. This is the ultimate "run" phase test of your security operations capabilities using full live engagement rules.',
    objectives: [
      'Test defensive coordination under pressure',
      'Validate alert tuning and noise reduction',
      'Practice threat hunting techniques',
      'Post-incident "Hot Wash" analysis'
    ],
    participants: ['Security Operations Center (SOC)', 'Threat Hunters'],
    format: 'Full-Scale Simulation',
    duration: '2 Days',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    methodology: [
      { step: 'Rules of Engagement', description: 'Strict definitions of scope to prevent real downtime.' },
      { step: 'Infiltration', description: 'Red Team attempts stealthy access and lateral movement.' },
      { step: 'Defense', description: 'Blue Team utilizes SIEM/EDR to hunt and block.' },
      { step: 'Purple Teaming', description: 'Collaborative debrief to explain attack paths and defense gaps.' }
    ],
    businessValue: [
      'Realistic stress test of entire security apparatus',
      'Validates investment in security tools',
      'Significantly matures detection logic'
    ]
  }
];