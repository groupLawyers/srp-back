"use client"

import { useState, useContext } from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { UserContext } from "@/lib/context/user-context"

interface Cliente {
  id: string
  nombre: string
  pais: string
  telefono: string
  email: string
  fechaIngreso: string
  pagado: boolean
  vendedor: string
  estado: "pendiente" | "aceptado" | "rechazado" | "seguimiento"
}

const data: Cliente[] = [
  {
    id: "1",
    nombre: "María González",
    pais: "México",
    telefono: "+52 123 456 7890",
    email: "maria@ejemplo.com",
    fechaIngreso: "2023-05-15",
    pagado: true,
    vendedor: "Carlos Rodríguez",
    estado: "aceptado",
  },
  {
    id: "2",
    nombre: "Juan Pérez",
    pais: "Colombia",
    telefono: "+57 321 654 9870",
    email: "juan@ejemplo.com",
    fechaIngreso: "2023-06-20",
    pagado: false,
    vendedor: "Ana Martínez",
    estado: "pendiente",
  },
  {
    id: "3",
    nombre: "Laura Sánchez",
    pais: "Argentina",
    telefono: "+54 911 234 5678",
    email: "laura@ejemplo.com",
    fechaIngreso: "2023-07-10",
    pagado: true,
    vendedor: "Carlos Rodríguez",
    estado: "seguimiento",
  },
  {
    id: "4",
    nombre: "Roberto Gómez",
    pais: "España",
    telefono: "+34 612 345 678",
    email: "roberto@ejemplo.com",
    fechaIngreso: "2023-08-05",
    pagado: false,
    vendedor: "Ana Martínez",
    estado: "rechazado",
  },
  {
    id: "5",
    nombre: "Sofía Torres",
    pais: "Chile",
    telefono: "+56 9 1234 5678",
    email: "sofia@ejemplo.com",
    fechaIngreso: "2023-09-15",
    pagado: true,
    vendedor: "Carlos Rodríguez",
    estado: "aceptado",
  },
  {
    id: "6",
    nombre: "Miguel Ángel",
    pais: "Perú",
    telefono: "+51 987 654 321",
    email: "miguel@ejemplo.com",
    fechaIngreso: "2023-10-20",
    pagado: false,
    vendedor: "Ana Martínez",
    estado: "pendiente",
  },
  {
    id: "7",
    nombre: "Valentina Ruiz",
    pais: "México",
    telefono: "+52 987 654 3210",
    email: "valentina@ejemplo.com",
    fechaIngreso: "2023-11-10",
    pagado: true,
    vendedor: "Carlos Rodríguez",
    estado: "seguimiento",
  },
  {
    id: "8",
    nombre: "Alejandro Díaz",
    pais: "Colombia",
    telefono: "+57 123 987 6540",
    email: "alejandro@ejemplo.com",
    fechaIngreso: "2023-12-05",
    pagado: false,
    vendedor: "Ana Martínez",
    estado: "rechazado",
  },
  {
    id: "9",
    nombre: "Camila Vargas",
    pais: "Argentina",
    telefono: "+54 911 987 6543",
    email: "camila@ejemplo.com",
    fechaIngreso: "2024-01-15",
    pagado: true,
    vendedor: "Carlos Rodríguez",
    estado: "aceptado",
  },
  {
    id: "10",
    nombre: "Daniel Herrera",
    pais: "España",
    telefono: "+34 612 987 654",
    email: "daniel@ejemplo.com",
    fechaIngreso: "2024-02-20",
    pagado: false,
    vendedor: "Ana Martínez",
    estado: "pendiente",
  },
]

interface ClientesTableProps {
  filter?: "pendiente" | "aceptado" | "rechazado" | "seguimiento"
}

export function ClientesTable({ filter }: ClientesTableProps) {
  const { user } = useContext(UserContext)
  const isAdmin = user?.role === "admin"

  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  // Filtrar datos según el parámetro filter
  const filteredData = filter ? data.filter((cliente) => cliente.estado === filter) : data

  const actionsColumn: ColumnDef<Cliente> = {
    id: "actions",
    cell: ({ row }) => {
      const cliente = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menú</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem>Ver detalles</DropdownMenuItem>
            {isAdmin && (
              <>
                <DropdownMenuItem>Editar cliente</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Cambiar estado</DropdownMenuItem>
                <DropdownMenuItem>Asignar vendedor</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">Eliminar</DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }

  const columns: ColumnDef<Cliente>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Seleccionar todo"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Seleccionar fila"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "nombre",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Nombre
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="font-medium">{row.getValue("nombre")}</div>,
    },
    {
      accessorKey: "pais",
      header: "País",
      cell: ({ row }) => <div>{row.getValue("pais")}</div>,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => <div>{row.getValue("email")}</div>,
    },
    {
      accessorKey: "telefono",
      header: "Teléfono",
      cell: ({ row }) => <div>{row.getValue("telefono")}</div>,
    },
    {
      accessorKey: "fechaIngreso",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Fecha de Ingreso
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const fecha = new Date(row.getValue("fechaIngreso"))
        return <div>{fecha.toLocaleDateString()}</div>
      },
    },
    {
      accessorKey: "pagado",
      header: "Pago",
      cell: ({ row }) => {
        const pagado = row.getValue("pagado")
        return <Badge variant={pagado ? "default" : "outline"}>{pagado ? "Pagado" : "Pendiente"}</Badge>
      },
    },
    {
      accessorKey: "vendedor",
      header: "Vendedor",
      cell: ({ row }) => <div>{row.getValue("vendedor")}</div>,
    },
    {
      accessorKey: "estado",
      header: "Estado",
      cell: ({ row }) => {
        const estado = row.getValue("estado") as string
        return (
          <Badge
            variant={
              estado === "aceptado"
                ? "default"
                : estado === "pendiente"
                  ? "outline"
                  : estado === "seguimiento"
                    ? "secondary"
                    : "destructive"
            }
          >
            {estado === "aceptado"
              ? "Aceptado"
              : estado === "pendiente"
                ? "Pendiente"
                : estado === "seguimiento"
                  ? "Seguimiento"
                  : "Rechazado"}
          </Badge>
        )
      },
    },
    actionsColumn,
  ]

  const table = useReactTable({
    data: filteredData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Input
              placeholder="Buscar por nombre..."
              value={(table.getColumn("nombre")?.getFilterValue() as string) ?? ""}
              onChange={(event) => table.getColumn("nombre")?.setFilterValue(event.target.value)}
              className="max-w-sm"
            />
            <div className="flex flex-col gap-2 sm:flex-row">
              <Select
                value={(table.getColumn("estado")?.getFilterValue() as string) ?? ""}
                onValueChange={(value) => table.getColumn("estado")?.setFilterValue(value === "todos" ? "" : value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filtrar por estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="pendiente">Pendiente</SelectItem>
                  <SelectItem value="aceptado">Aceptado</SelectItem>
                  <SelectItem value="rechazado">Rechazado</SelectItem>
                  <SelectItem value="seguimiento">Seguimiento</SelectItem>
                </SelectContent>
              </Select>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-auto">
                    Columnas <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className="capitalize"
                          checked={column.getIsVisible()}
                          onCheckedChange={(value) => column.toggleVisibility(!!value)}
                        >
                          {column.id === "pagado"
                            ? "Pago"
                            : column.id === "fechaIngreso"
                              ? "Fecha de Ingreso"
                              : column.id}
                        </DropdownMenuCheckboxItem>
                      )
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(header.column.columnDef.header, header.getContext())}
                        </TableHead>
                      )
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No se encontraron resultados.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} de {table.getFilteredRowModel().rows.length} fila(s)
              seleccionada(s).
            </div>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Anterior
              </Button>
              <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                Siguiente
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
