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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent } from "@/components/ui/card"
import { UserContext } from "@/lib/context/user-context"

interface Vendedor {
  id: string
  nombre: string
  email: string
  telefono: string
  fechaIngreso: string
  clientesAsignados: number
  ventasRealizadas: number
  rendimiento: "alto" | "medio" | "bajo"
  avatar: string
}

const data: Vendedor[] = [
  {
    id: "1",
    nombre: "Carlos Rodríguez",
    email: "carlos@ejemplo.com",
    telefono: "+52 123 456 7890",
    fechaIngreso: "2022-01-15",
    clientesAsignados: 45,
    ventasRealizadas: 32,
    rendimiento: "alto",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    nombre: "Ana Martínez",
    email: "ana@ejemplo.com",
    telefono: "+57 321 654 9870",
    fechaIngreso: "2022-03-20",
    clientesAsignados: 38,
    ventasRealizadas: 25,
    rendimiento: "medio",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    nombre: "Luis Gómez",
    email: "luis@ejemplo.com",
    telefono: "+54 911 234 5678",
    fechaIngreso: "2022-05-10",
    clientesAsignados: 52,
    ventasRealizadas: 40,
    rendimiento: "alto",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "4",
    nombre: "Sofía Pérez",
    email: "sofia@ejemplo.com",
    telefono: "+34 612 345 678",
    fechaIngreso: "2022-07-05",
    clientesAsignados: 30,
    ventasRealizadas: 18,
    rendimiento: "bajo",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "5",
    nombre: "Miguel Torres",
    email: "miguel@ejemplo.com",
    telefono: "+56 9 1234 5678",
    fechaIngreso: "2022-09-15",
    clientesAsignados: 42,
    ventasRealizadas: 35,
    rendimiento: "alto",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "6",
    nombre: "Laura Sánchez",
    email: "laura@ejemplo.com",
    telefono: "+51 987 654 321",
    fechaIngreso: "2022-11-20",
    clientesAsignados: 36,
    ventasRealizadas: 22,
    rendimiento: "medio",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "7",
    nombre: "Daniel Herrera",
    email: "daniel@ejemplo.com",
    telefono: "+52 987 654 3210",
    fechaIngreso: "2023-01-10",
    clientesAsignados: 48,
    ventasRealizadas: 30,
    rendimiento: "medio",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "8",
    nombre: "Valentina Ruiz",
    email: "valentina@ejemplo.com",
    telefono: "+57 123 987 6540",
    fechaIngreso: "2023-03-05",
    clientesAsignados: 25,
    ventasRealizadas: 12,
    rendimiento: "bajo",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function VendedoresTable() {
  const { user } = useContext(UserContext)
  const isAdmin = user?.role === "admin"

  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const actionsColumn: ColumnDef<Vendedor> = {
    id: "actions",
    cell: ({ row }) => {
      const vendedor = row.original

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
            <DropdownMenuItem>Ver perfil</DropdownMenuItem>
            {isAdmin && (
              <>
                <DropdownMenuItem>Editar vendedor</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Ver clientes asignados</DropdownMenuItem>
                <DropdownMenuItem>Asignar nuevos clientes</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">Eliminar</DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }

  const columns: ColumnDef<Vendedor>[] = [
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
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={row.original.avatar || "/placeholder.svg"} alt={row.getValue("nombre")} />
            <AvatarFallback>{row.getValue<string>("nombre").charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="font-medium">{row.getValue("nombre")}</div>
        </div>
      ),
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
      accessorKey: "clientesAsignados",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Clientes
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="text-center">{row.getValue("clientesAsignados")}</div>,
    },
    {
      accessorKey: "ventasRealizadas",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Ventas
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="text-center">{row.getValue("ventasRealizadas")}</div>,
    },
    {
      accessorKey: "rendimiento",
      header: "Rendimiento",
      cell: ({ row }) => {
        const rendimiento = row.getValue("rendimiento") as string
        return (
          <Badge variant={rendimiento === "alto" ? "default" : rendimiento === "medio" ? "secondary" : "destructive"}>
            {rendimiento === "alto" ? "Alto" : rendimiento === "medio" ? "Medio" : "Bajo"}
          </Badge>
        )
      },
    },
    actionsColumn,
  ]

  const table = useReactTable({
    data,
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
                        {column.id === "clientesAsignados"
                          ? "Clientes"
                          : column.id === "ventasRealizadas"
                            ? "Ventas"
                            : column.id === "fechaIngreso"
                              ? "Fecha de Ingreso"
                              : column.id}
                      </DropdownMenuCheckboxItem>
                    )
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
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
