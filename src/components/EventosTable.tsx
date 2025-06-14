import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import Button from './Button';

// Event type
interface Evento {
  id: number;
  nome: string;
  equipes: number;
  status: 'Ativo' | 'Inativo';
  data: string;
}

// Mock data
const MOCK_EVENTOS: Evento[] = [
  {
    id: 1,
    nome: 'Clube do Laço Coração Pantaneiro',
    equipes: 10,
    status: 'Ativo',
    data: '09 a 11 de Junho',
  },
  {
    id: 2,
    nome: 'Clube do Laço Coração Pantaneiro',
    equipes: 10,
    status: 'Ativo',
    data: '09 a 11 de Junho',
  },
  // Add more mock events as needed
];

const TableContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.04);
  padding: 32px 24px 24px 24px;
  margin: 24px 0;
  border: 1px solid #e5e7eb;
`;
const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;
const Title = styled.h2`
  color: #d26b3a;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
`;
const SearchInput = styled.input`
  background: #f6f7f8;
  border: none;
  border-radius: 50px;
  padding: 10px 36px 10px 36px;
  font-size: 1rem;
  outline: none;
  width: 220px;
  margin-right: 16px;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const Th = styled.th`
  text-align: left;
  color: #d26b3a;
  font-size: 1rem;
  font-weight: 600;
  padding: 12px 0;
`;
const Td = styled.td`
  padding: 12px 0;
  font-size: 1rem;
  color: #3a3a3a;
  border-top: 1px solid #f2f2f2;
`;
const StatusDot = styled.span<{ active: boolean }>`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${p => (p.active ? '#3fff00' : '#ccc')};
  margin-right: 8px;
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`;
const Dots = styled.span`
  font-size: 24px;
  color: #d26b3a;
  cursor: pointer;
  padding: 0 8px;
`;
const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 24px;
`;
const PageButton = styled(Button)<{ active?: boolean }>`
  background: ${p => (p.active ? '#d26b3a' : '#fff')};
  color: ${p => (p.active ? '#fff' : '#d26b3a')};
  border: 1px solid #d26b3a;
  border-radius: 50px;
  padding: 8px 18px;
  min-width: 40px;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
    background: #b85a2e;
    color: #fff;
  }
`;
const OutlinedButton = styled(Button)`
  background: #fff;
  color: #d26b3a;
  border: 1px solid #d26b3a;
  border-radius: 50px;
  padding: 8px 18px;
  min-width: 40px;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
    background: #f6f7f8;
  }
`;
const InserirButton = styled(Button)`
  background: #d26b3a;
  color: #fff;
  border-radius: 50px;
  padding: 10px 28px;
  font-size: 1rem;
  font-weight: 600;
  margin-left: 12px;
`;
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #f6f7f8;
  border-radius: 50px;
  padding-left: 16px;
  margin-right: 16px;
`;
const SearchIcon = () => (
  <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: 8}}>
    <circle cx="8.5" cy="8.5" r="7.5" stroke="#B0B0B0" strokeWidth="2" />
    <path d="M16 16L13 13" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PAGE_SIZE = 5;

const EventosTable: React.FC = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const eventos = useMemo(() => {
    return MOCK_EVENTOS.filter(e =>
      e.nome.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);
  const pageCount = Math.ceil(eventos.length / PAGE_SIZE) || 1;
  const paginated = eventos.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <TableContainer>
      <TableHeader>
        <Title>Eventos</Title>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SearchWrapper>
            <SearchIcon />
            <SearchInput
              placeholder="Buscar eventos"
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
            />
          </SearchWrapper>
          <InserirButton>+ Inserir novo</InserirButton>
        </div>
      </TableHeader>
      <Table>
        <thead>
          <tr>
            <Th>Nome do evento</Th>
            <Th>Total de equipes</Th>
            <Th>Status</Th>
            <Th>Data</Th>
            <Th></Th>
          </tr>
        </thead>
        <tbody>
          {paginated.map(evento => (
            <tr key={evento.id}>
              <Td style={{ color: '#3a5a8a', fontWeight: 500 }}>{evento.nome}</Td>
              <Td>{evento.equipes}</Td>
              <Td>
                <StatusDot active={evento.status === 'Ativo'} />
                <span style={{ color: '#3a5a8a', fontWeight: 500 }}>{evento.status}</span>
              </Td>
              <Td style={{ color: '#3a5a8a', fontWeight: 500 }}>{evento.data}</Td>
              <Td>
                <Actions>
                  <Dots>⋮</Dots>
                </Actions>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <OutlinedButton onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Anterior</OutlinedButton>
        {Array.from({ length: pageCount }).map((_, i) => (
          <PageButton key={i} active={page === i + 1} onClick={() => setPage(i + 1)}>{i + 1}</PageButton>
        ))}
        <PageButton onClick={() => setPage(p => Math.min(pageCount, p + 1))} disabled={page === pageCount}>Próxima</PageButton>
      </Pagination>
    </TableContainer>
  );
};

export default EventosTable; 