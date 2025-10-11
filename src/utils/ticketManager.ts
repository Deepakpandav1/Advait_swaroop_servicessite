export interface Ticket {
  id: string;
  type: 'G2C' | 'B2C';
  service: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: 'New' | 'In Progress' | 'Resolved' | 'Closed';
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
  comments: TicketComment[];
  source: 'G2C Form' | 'B2C Form';
}

export interface TicketComment {
  id: string;
  ticketId: string;
  author: string;
  message: string;
  createdAt: string;
  type: 'comment' | 'status_change' | 'assignment';
}

// Generate unique ticket ID
export const generateTicketId = (): string => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substr(2, 5);
  return `TKT-${timestamp}-${random}`.toUpperCase();
};

// Get all tickets from localStorage
export const getTickets = (): Ticket[] => {
  try {
    const tickets = localStorage.getItem('admin_tickets');
    return tickets ? JSON.parse(tickets) : [];
  } catch (error) {
    console.error('Error loading tickets:', error);
    return [];
  }
};

// Save tickets to localStorage
export const saveTickets = (tickets: Ticket[]): void => {
  try {
    localStorage.setItem('admin_tickets', JSON.stringify(tickets));
  } catch (error) {
    console.error('Error saving tickets:', error);
  }
};

// Create a new ticket
export const createTicket = (ticketData: Omit<Ticket, 'id' | 'createdAt' | 'updatedAt' | 'comments'>): Ticket => {
  const newTicket: Ticket = {
    ...ticketData,
    id: generateTicketId(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    comments: []
  };

  const tickets = getTickets();
  tickets.push(newTicket);
  saveTickets(tickets);

  return newTicket;
};

// Update ticket status
export const updateTicketStatus = (ticketId: string, status: Ticket['status'], updatedBy: string): boolean => {
  const tickets = getTickets();
  const ticketIndex = tickets.findIndex(t => t.id === ticketId);
  
  if (ticketIndex === -1) return false;

  const oldStatus = tickets[ticketIndex].status;
  tickets[ticketIndex].status = status;
  tickets[ticketIndex].updatedAt = new Date().toISOString();

  // Add status change comment
  const comment: TicketComment = {
    id: generateTicketId(),
    ticketId,
    author: updatedBy,
    message: `Status changed from ${oldStatus} to ${status}`,
    createdAt: new Date().toISOString(),
    type: 'status_change'
  };

  tickets[ticketIndex].comments.push(comment);
  saveTickets(tickets);
  return true;
};

// Assign ticket to user
export const assignTicket = (ticketId: string, assignedTo: string, assignedBy: string): boolean => {
  const tickets = getTickets();
  const ticketIndex = tickets.findIndex(t => t.id === ticketId);
  
  if (ticketIndex === -1) return false;

  tickets[ticketIndex].assignedTo = assignedTo;
  tickets[ticketIndex].updatedAt = new Date().toISOString();

  // Add assignment comment
  const comment: TicketComment = {
    id: generateTicketId(),
    ticketId,
    author: assignedBy,
    message: `Ticket assigned to ${assignedTo}`,
    createdAt: new Date().toISOString(),
    type: 'assignment'
  };

  tickets[ticketIndex].comments.push(comment);
  saveTickets(tickets);
  return true;
};

// Add comment to ticket
export const addTicketComment = (ticketId: string, author: string, message: string): boolean => {
  const tickets = getTickets();
  const ticketIndex = tickets.findIndex(t => t.id === ticketId);
  
  if (ticketIndex === -1) return false;

  const comment: TicketComment = {
    id: generateTicketId(),
    ticketId,
    author,
    message,
    createdAt: new Date().toISOString(),
    type: 'comment'
  };

  tickets[ticketIndex].comments.push(comment);
  tickets[ticketIndex].updatedAt = new Date().toISOString();
  saveTickets(tickets);
  return true;
};

// Get ticket by ID
export const getTicketById = (ticketId: string): Ticket | null => {
  const tickets = getTickets();
  return tickets.find(t => t.id === ticketId) || null;
};

// Get tickets by type
export const getTicketsByType = (type: 'G2C' | 'B2C'): Ticket[] => {
  const tickets = getTickets();
  return tickets.filter(t => t.type === type);
};

// Get tickets by status
export const getTicketsByStatus = (status: Ticket['status']): Ticket[] => {
  const tickets = getTickets();
  return tickets.filter(t => t.status === status);
};

// Get ticket statistics
export const getTicketStats = () => {
  const tickets = getTickets();
  
  return {
    total: tickets.length,
    new: tickets.filter(t => t.status === 'New').length,
    inProgress: tickets.filter(t => t.status === 'In Progress').length,
    resolved: tickets.filter(t => t.status === 'Resolved').length,
    closed: tickets.filter(t => t.status === 'Closed').length,
    g2c: tickets.filter(t => t.type === 'G2C').length,
    b2c: tickets.filter(t => t.type === 'B2C').length,
    today: tickets.filter(t => {
      const today = new Date().toDateString();
      const ticketDate = new Date(t.createdAt).toDateString();
      return today === ticketDate;
    }).length
  };
};

// Delete ticket (for admin purposes)
export const deleteTicket = (ticketId: string): boolean => {
  const tickets = getTickets();
  const filteredTickets = tickets.filter(t => t.id !== ticketId);
  
  if (filteredTickets.length === tickets.length) return false;
  
  saveTickets(filteredTickets);
  return true;
};

// Search tickets
export const searchTickets = (query: string): Ticket[] => {
  const tickets = getTickets();
  const searchTerm = query.toLowerCase();
  
  return tickets.filter(ticket => 
    ticket.id.toLowerCase().includes(searchTerm) ||
    ticket.name.toLowerCase().includes(searchTerm) ||
    ticket.email.toLowerCase().includes(searchTerm) ||
    ticket.phone.toLowerCase().includes(searchTerm) ||
    ticket.service.toLowerCase().includes(searchTerm) ||
    ticket.message.toLowerCase().includes(searchTerm)
  );
};
